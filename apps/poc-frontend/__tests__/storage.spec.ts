import { describe, it, expect, beforeEach } from 'vitest'
import { LocalStorage } from '@/lib/storage'

describe('LocalStorage', () => {
	beforeEach(() => {
		localStorage.clear()
	})

	it('should store and retrieve data', () => {
		const storage = new LocalStorage<{ name: string }>('test-key')
		const data = { name: 'John' }

		storage.set(data)
		const retrieved = storage.get()

		expect(retrieved).toEqual(data)
	})

	it('should return null for non-existent keys', () => {
		const storage = new LocalStorage<string>('non-existent')
		expect(storage.get()).toBeNull()
	})

	it('should clear data', () => {
		const storage = new LocalStorage<string>('test-key')

		storage.set('test value')
		expect(storage.exists()).toBe(true)

		storage.clear()
		expect(storage.exists()).toBe(false)
	})

	it('should handle prefix correctly', () => {
		const storage = new LocalStorage<string>('key', { prefix: 'app' })

		storage.set('value')
		expect(localStorage.getItem('app:key')).toBeTruthy()
	})

	it('should handle version checking', () => {
		const storage1 = new LocalStorage<string>('key', { version: '1.0' })
		const storage2 = new LocalStorage<string>('key', { version: '2.0' })

		storage1.set('old value')
		expect(storage2.get()).toBeNull()
	})
})
