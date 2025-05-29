import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default [
	...nextnodeEslint,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.eslint.json',
			},
		},
	},
	{
		files: ['**/*.test.ts', '**/*.spec.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.test.json',
			},
		},
	},
]
