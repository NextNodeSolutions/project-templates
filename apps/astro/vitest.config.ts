import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '@nextnode/standards/vitest/frontend'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { Plugin } from 'vitest/config'

export default mergeConfig(
	baseConfig,
	defineConfig({
		plugins: [tsconfigPaths() as Plugin],
		test: {
			setupFiles: ['./tests/setup.ts'],
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
