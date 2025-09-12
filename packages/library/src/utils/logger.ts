/**
 * Logger utility for {{project_name}}
 * Centralized logging with @nextnode/logger
 */

import { createLogger } from '@nextnode/logger'

export const logger = createLogger()

// Specialized loggers for different modules (examples)
export const apiLogger = createLogger({ 
	prefix: 'API' 
})

export const coreLogger = createLogger({ 
	prefix: 'CORE' 
})

export const utilsLogger = createLogger({ 
	prefix: 'UTILS' 
})

/**
 * Log helper for debugging complex objects
 * @param label - Label for the log entry
 * @param data - Data to log
 */
export const logDebug = (label: string, data: unknown): void => {
	logger.info(`[DEBUG] ${label}`, { details: data })
}

/**
 * Log helper for API responses
 * @param method - HTTP method
 * @param url - Request URL  
 * @param status - Response status
 * @param data - Response data
 */
export const logApiResponse = (
	method: string,
	url: string, 
	status: number,
	data?: unknown
): void => {
	const responseDetails = data ? { status, data } : { status }
	apiLogger.info(`${method.toUpperCase()} ${url}`, {
		status,
		details: responseDetails
	})
}

/**
 * Log helper for errors with context
 * @param error - Error object or message
 * @param context - Additional context
 */
export const logError = (error: unknown, context?: Record<string, unknown>): void => {
	const errorMessage = error instanceof Error ? error.message : String(error)
	const errorStack = error instanceof Error ? error.stack : undefined
	
	const errorDetails: Record<string, unknown> = { error: errorMessage }
	if (errorStack) errorDetails.stack = errorStack
	if (context) errorDetails.context = context
	
	logger.error('Operation failed', { details: errorDetails })
}
