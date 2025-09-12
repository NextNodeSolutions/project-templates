/**
 * Core library functionality tests
 */

import { describe, it, expect } from 'vitest'

import { createClient, validateConfig } from '../lib/core.js'

describe('Core Library', () => {
  describe('createClient', () => {
    it('should create client with default options', () => {
      const client = createClient()
      
      expect(client).toBeDefined()
      expect(client.apiKey).toBeUndefined()
    })
    
    it('should create client with provided options', () => {
      const client = createClient({ apiKey: 'test-key' })
      
      expect(client).toBeDefined()
      expect(client.apiKey).toBe('test-key')
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
})