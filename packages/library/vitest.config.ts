import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '@nextnode/standards/vitest/backend'
import tsconfigPaths from 'vite-tsconfig-paths'

export default mergeConfig(
	baseConfig,
	defineConfig({
		plugins: [tsconfigPaths()],
	})
)
