import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '@nextnode/standards/vitest/backend'
import tsconfigPaths from 'vite-tsconfig-paths'

export default mergeConfig(
	baseConfig,
	defineConfig({
		plugins: [tsconfigPaths()],
		test: {
            include: ['./**/*.{test,spec}.ts'],
			setupFiles: ['./tests/setup.ts'],
			coverage: {
                reportsDirectory: './tests/coverage',
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
