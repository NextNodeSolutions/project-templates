import baseConfig from '@nextnode/standards/vitest/frontend'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { Plugin } from 'vitest/config'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
	baseConfig,
	defineConfig({
		plugins: [tsconfigPaths() as Plugin],
		test: {
            include: ['./**/*.{test,spec}.ts'],
			setupFiles: ['./tests/setup.ts'],
			coverage: {
                reportsDirectory: './tests/coverage',
                // Minimium coverage to pass tests
				// thresholds: {
				// 	lines: 80,
				// 	functions: 80,
				// 	branches: 80,
				// 	statements: 80
				// }
			}
		}
	})
)
