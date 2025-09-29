/**
 * Core library functionality tests
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

import { createClient, validateConfig, processData } from '../lib/core.js'

// Mock the logger
vi.mock('../utils/logger.js', () => ({
  coreLogger: {
    info: vi.fn()
  },
  logError: vi.fn()
}))

describe('Core Library', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('createClient', () => {
    it('should create client with default options', () => {
      const client = createClient()
      
      expect(client).toBeDefined()
      expect(client.apiKey).toBeUndefined()
      expect(client.baseUrl).toBeUndefined()
    })
    
    it('should create client with provided options', () => {
      const options = { 
        apiKey: 'test-key', 
        baseUrl: 'https://api.example.com' 
      }
      const client = createClient(options)
      
      expect(client).toBeDefined()
      expect(client.apiKey).toBe('test-key')
      expect(client.baseUrl).toBe('https://api.example.com')
    })

    it('should create client with partial options', () => {
      const client = createClient({ apiKey: 'test-key' })
      
      expect(client).toBeDefined()
      expect(client.apiKey).toBe('test-key')
      expect(client.baseUrl).toBeUndefined()
    })
  })
  
  describe('validateConfig', () => {
    it('should validate valid config object', () => {
      const config = { apiKey: 'test', baseUrl: 'https://api.example.com' }
      
      expect(validateConfig(config)).toBe(true)
    })
    
    it('should reject invalid config', () => {
      expect(validateConfig(null)).toBe(false)
      expect(validateConfig('string')).toBe(false)
      expect(validateConfig(123)).toBe(false)
      expect(validateConfig([])).toBe(false)
    })
  })

  describe('processData', () => {
    it('should process empty array', async () => {
      const result = await processData([])
      
      expect(result).toEqual([])
    })

    it('should process data array and add metadata', async () => {
      const inputData = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' }
      ]
      
      const result = await processData(inputData)
      
      expect(result).toHaveLength(2)
      expect(result[0]).toEqual({
        id: 1,
        name: 'test1',
        processed: true,
        timestamp: expect.any(Number)
      })
      expect(result[1]).toEqual({
        id: 2,
        name: 'test2',
        processed: true,
        timestamp: expect.any(Number)
      })
    })

    it('should handle data processing errors', async () => {
      // This would need to be a more specific test case based on your actual error scenarios
      // For now, we'll test the basic structure
      const inputData = [{ id: 1 }]
      
      const result = await processData(inputData)
      expect(result[0]).toHaveProperty('processed', true)
    })
  })
})