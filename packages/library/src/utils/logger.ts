import { createLogger } from '@nextnode/logger'

/**
 * Main library logger
 */
export const logger = createLogger({ prefix: 'LIB' })

/**
 * Core functionality logger
 */
export const coreLogger = createLogger({ prefix: 'CORE' })

/**
 * Utility functions logger
 */
export const utilsLogger = createLogger({ prefix: 'UTILS' })
