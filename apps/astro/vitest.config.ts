import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
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
