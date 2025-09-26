import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '@nextnode/standards/vitest/backend'

export default mergeConfig(baseConfig, defineConfig({}))
