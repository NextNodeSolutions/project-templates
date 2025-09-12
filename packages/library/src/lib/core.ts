/**
 * Core library functionality
 */

/**
 * Example core function
 * Replace this with your actual library functionality
 */
export const createClient = (options: { apiKey?: string } = {}): { apiKey?: string } => ({
    ...(options.apiKey && { apiKey: options.apiKey }),
    // Add your core functionality here
  })

/**
 * Example utility function
 */
export const validateConfig = (config: unknown): config is Record<string, unknown> => typeof config === 'object' && config !== null && !Array.isArray(config)