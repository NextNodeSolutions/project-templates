import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		coverage: {
			provider: 'v8',
			reporter: [
				[
					'json',
					{
						file: `../coverage.json`,
					},
				],
			],
			enabled: true,
		},
	},
})