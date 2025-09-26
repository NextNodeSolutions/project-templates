import { createLogger } from '@nextnode/logger'

// Core application loggers
export const configLogger = createLogger({ prefix: 'config' })
export const componentLogger = createLogger({ prefix: 'component' })
export const layoutLogger = createLogger({ prefix: 'layout' })

// API and middleware loggers
export const middlewareLogger = createLogger({ prefix: 'middleware' })
export const apiLogger = createLogger({ prefix: 'api' })

// Feature-specific loggers
export const astroLogger = createLogger({ prefix: 'astro' })
export const buildLogger = createLogger({ prefix: 'build' })
export const devLogger = createLogger({ prefix: 'dev' })

// Default logger for general use
export const logger = createLogger({ prefix: '{{project_name}}' })