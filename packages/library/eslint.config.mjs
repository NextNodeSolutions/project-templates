import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default [
	...nextnodeEslint,
	{
		ignores: ['dist/**/*', 'coverage/**/*'],
	},
]
