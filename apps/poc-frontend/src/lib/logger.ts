import { createLogger } from '@nextnode/logger'

/**
 * Main application logger
 * Use for general application-level logging
 */
export const appLogger = createLogger({ prefix: '{{project_name}}' })

/**
 * Storage operations logger
 * Use for localStorage and data persistence operations
 */
export const storageLogger = createLogger({ prefix: '{{project_name}}:storage' })

/**
 * Component logger
 * Use for component lifecycle and rendering logs
 */
export const componentLogger = createLogger({ prefix: '{{project_name}}:component' })

/**
 * API logger (if needed for external API calls)
 * Use for HTTP requests and API interactions
 */
export const apiLogger = createLogger({ prefix: '{{project_name}}:api' })
