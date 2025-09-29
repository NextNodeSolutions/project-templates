/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * Environment variables type definitions
 */

interface ImportMetaEnv {
	readonly NODE_ENV: 'development' | 'production' | 'test'
	readonly HOST?: string
	readonly PORT?: string
	readonly URL?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}