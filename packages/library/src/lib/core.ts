/**
 * Core library functionality
 */

import { coreLogger, logError } from '../utils/logger.js'

import type { ClientConfig } from '../types/index.js'

/**
 * Example core function - creates a client instance
 * Replace this with your actual library functionality
 */
export const createClient = (options: ClientConfig = {}): { apiKey?: string; baseUrl?: string } => {
  coreLogger.info('Creating client instance', { 
    details: {
      hasApiKey: Boolean(options.apiKey),
      baseUrl: options.baseUrl || 'default'
    }
  })
  
  try {
    const client = {
      ...(options.apiKey && { apiKey: options.apiKey }),
      ...(options.baseUrl && { baseUrl: options.baseUrl })
    }
    
    coreLogger.info('Client created successfully')
    return client
  } catch (error) {
    logError(error, { options })
    throw error
  }
}

/**
 * Example validation function with logging
 */
export const validateConfig = (config: unknown): config is Record<string, unknown> => {
  const isValid = typeof config === 'object' && config !== null && !Array.isArray(config)
  
  coreLogger.info('Config validation', { 
    details: {
      isValid, 
      type: typeof config,
      isArray: Array.isArray(config) 
    }
  })
  
  return isValid
}

/**
 * Example async function with proper error logging
 */
export const processData = async (data: unknown[]): Promise<unknown[]> => {
  coreLogger.info('Processing data', { details: { itemCount: data.length } })
  
  try {
    // Simulate some processing
    const processed = data.map(item => ({ 
      ...item as Record<string, unknown>, 
      processed: true,
      timestamp: Date.now()
    }))
    
    coreLogger.info('Data processing completed', { 
      details: {
        inputCount: data.length,
        outputCount: processed.length
      }
    })
    
    return processed
  } catch (error) {
    logError(error, { inputData: data })
    throw new Error(`Data processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}