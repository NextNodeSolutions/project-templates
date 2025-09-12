/**
 * Utility functions for the library
 */

/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object
 */
export const deepMerge = <T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T => {
  const result: Record<string, unknown> = { ...target }
  
  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = result[key]
    
    if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(
        targetValue as Record<string, unknown>, 
        sourceValue as Record<string, unknown>
      )
    } else if (sourceValue !== undefined) {
      result[key] = sourceValue
    }
  }
  
  return result as T
}

/**
 * Check if value is a plain object
 * @param value - Value to check
 * @returns True if value is a plain object
 */
export const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value)

/**
 * Delay execution for specified milliseconds
 * @param ms - Milliseconds to wait
 * @returns Promise that resolves after delay
 */
export const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

// Export logger utilities
export * from './logger.js'