/**
 * Global type definitions
 */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test'
			HOST?: string
			PORT?: string
			URL?: string
		}
	}
}

export {}