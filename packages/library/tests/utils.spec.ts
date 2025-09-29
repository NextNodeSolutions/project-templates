/**
 * Utility functions tests
 */

import { describe, it, expect } from 'vitest'

import { deepMerge, isObject, delay } from '../utils/index.js'

describe('Utils', () => {
  describe('deepMerge', () => {
    it('should merge simple objects', () => {
      const target = { a: 1, b: 2 }
      const source = { b: 3, c: 4 }
      
      const result = deepMerge(target, source)
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 })
    })
    
    it('should merge nested objects', () => {
      const target = { 
        config: { 
          api: { timeout: 1000 },
          debug: true 
        }
      }
      const source: Partial<typeof target> = {
        config: {
          api: { timeout: 2000 },
          debug: false
        }
      }
      
      const result = deepMerge(target, source)
      
      expect(result.config.api.timeout).toBe(2000)
      expect(result.config.debug).toBe(false)
    })
  })
  
  describe('isObject', () => {
    it('should identify plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ key: 'value' })).toBe(true)
    })
    
    it('should reject non-objects', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject([])).toBe(false)
      expect(isObject('string')).toBe(false)
      expect(isObject(123)).toBe(false)
      expect(isObject(undefined)).toBe(false)
    })
  })
  
  describe('delay', () => {
    it('should delay execution', async () => {
      const start = Date.now()
      await delay(10)
      const end = Date.now()
      
      expect(end - start).toBeGreaterThanOrEqual(10)
    })
  })
})