/* 请求接口函数的模块 */
import ajax from "./ajax";

require('../setupProxy')
// const BASE_URL = '/api-boss'

// export function rerRegister() {}
/* 端口号不同，存在跨域
*  解决：1.jsonp,只能解决get； 2. cross 服务器端配置；
*       3.代理（代理服务器，存在于客户端，帮助转发请求）
*  */
// export const reqRegister = (user) => ajax('http://localhost:4000/register', user, 'POST')

// 注册
export const reqRegister = (user) => ajax('/api-boss/register', user, 'POST')

// 登录
export const reqLogin = ({username, password}) => ajax('/api-boss/login', {username, password}, 'POST')

// 更新用户
export const reqUpdateUser = (user) => ajax('/api-boss/update', user, 'POST')

// 获取用户信息
export const reqUserInfo = () => ajax('/api-boss/user')

// 获取用户列表
export const reqUserList = (type) => ajax(('/api-boss/userlist'), {type})

// 获取用户的聊天消息列表
export const reqChatMsgList = () => ajax('/api-boss/msglist')

// 修改消息为已读
export const reqReadMsg = (from) => ajax('/api-boss/readmsg', {from}, 'POST')