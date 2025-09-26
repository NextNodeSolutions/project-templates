import { loadConfig } from '@nextnode/config-manager'
import type { Config } from '@/types/config.d.ts'
import { configLogger } from '@/lib/logging/index.ts'

/**
 * Load and access application configuration
 * Loads from config/ directory based on NODE_ENV
 */
export const getConfig = (path?: string) => {
	try {
		return loadConfig<Config>(path)
	} catch (error) {
		configLogger.error('Failed to load configuration', {
			details: {
				path,
				error: error instanceof Error ? error.message : String(error),
				env: process.env.NODE_ENV
			}
		})
		throw error
	}
}

export type { Config } from '@/types/config.d.ts'