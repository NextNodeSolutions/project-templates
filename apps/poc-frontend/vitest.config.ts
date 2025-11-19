import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import frontendConfig from '@nextnode/standards/vitest/frontend'

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			...frontendConfig.test,
			setupFiles: ['./__tests__/setup.ts'],
		},
	})
)
