// 按照angular 规范对 commit message 校验，要校验自定义规范可以通过 rules 参数来实现
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'style',
				'docs',
				'refactor',
				'perf',
				'ci',
				'build',
				'WIP',
				'revert',
				'test',
				'chore',
			],
		],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
	},
}
