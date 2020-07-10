// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

// 1.create-react-app 的版本高于 2.0 版本的时候在 package.json 只能配置 string 类型
// "proxy": {
//   "/api-boss": {
//     "target": "http://127.0.0.1:3002",
//     "changeOrigin": true,
//     "pathRewrite": {
//       "^/api-boss": "/"
//     }
//   }
// }

module.exports = function(app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  // 2.报proxy is not a funtion 表示此方法已经被弃用
  // app.use(
  //   proxy('/api-boss', {
  //     target: 'http://127.0.0.1:3002',
  //     // 跨域时一般都设置该值 为 true
  //     changeOrigin: true,
  //     // 重写接口路由
  //     pathRewrite: {
  //       '^/api-boss': '/' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
  //     }
  //   })
  // )

  app.use(createProxyMiddleware('/api-boss', {
      target: 'http://127.0.0.1:3002',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api-boss': '/'
      }
    })
  )
}