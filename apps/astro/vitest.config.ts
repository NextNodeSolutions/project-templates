import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '@nextnode/standards/vitest/frontend'

export default mergeConfig(
	baseConfig,
	defineConfig({
		test: {
			setupFiles: ['./tests/setup.ts'],
			include: ['tests/**/*.{test,spec}.{js,ts}', 'src/**/*.{test,spec}.{js,ts}'],
			coverage: {
				thresholds: {
					lines: 80,
					functions: 80,
					branches: 80,
					statements: 80
				}
			}
		}
	})
)