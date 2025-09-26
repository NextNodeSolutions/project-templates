/**
 * Configuration type definitions
 * Auto-generated from config JSON files
 */

export interface AppConfig {
	name: string
	version: string
	description: string
}

export interface ServerConfig {
	host: string
	port: number
}

export interface FeaturesConfig {
	telemetry?: boolean
	healthCheck?: boolean
	hotReload?: boolean
	devtools?: boolean
	compression?: boolean
	caching?: boolean
	mockData?: boolean
	security?: {
		headers?: boolean
		cors?: boolean
	}
}

export interface LoggingConfig {
	level: 'debug' | 'info' | 'warn' | 'error'
	format: 'console' | 'json'
}

export interface DatabaseConfig {
	mock?: boolean
}

export interface Config {
	app: AppConfig
	server: ServerConfig
	features: FeaturesConfig
	logging: LoggingConfig
	database?: DatabaseConfig
}