import { describe, it, expect } from 'vitest'
import { cn, generateId, formatDate } from '@/lib/utils'

describe('Utils', () => {
	describe('cn', () => {
		it('should merge class names correctly', () => {
			expect(cn('px-4 py-2', 'bg-blue-500')).toBe('px-4 py-2 bg-blue-500')
		})

		it('should handle conditional classes', () => {
			expect(cn('px-4', true && 'py-2', false && 'hidden')).toBe('px-4 py-2')
		})

		it('should handle Tailwind conflicts', () => {
			expect(cn('px-4', 'px-8')).toBe('px-8')
		})
	})

	describe('generateId', () => {
		it('should generate unique IDs', () => {
			const id1 = generateId()
			const id2 = generateId()

			expect(id1).not.toBe(id2)
			expect(id1).toMatch(/^\d+-[a-z0-9]+$/)
		})
	})

	describe('formatDate', () => {
		it('should format date correctly', () => {
			const date = new Date('2024-01-15')
			const formatted = formatDate(date)

			expect(formatted).toContain('January')
			expect(formatted).toContain('15')
			expect(formatted).toContain('2024')
		})

		it('should handle string dates', () => {
			const formatted = formatDate('2024-01-15')
			expect(formatted).toContain('January')
		})
	})
})
