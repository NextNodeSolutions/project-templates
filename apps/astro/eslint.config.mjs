import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default [
	...nextnodeEslint,
	{
		ignores: ['dist/**', 'node_modules/**', '.astro/**', '**/.astro/**'],
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
	{
		files: ['astro.config.mjs'],
		languageOptions: {
			globals: {
				process: 'readonly',
				console: 'readonly',
			},
		},
	},
]