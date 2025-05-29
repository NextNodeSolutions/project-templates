import { describe, it, expect } from 'vitest'

import { formatDate } from './date'

describe('formatDate', () => {
	it('should format a date with default options', () => {
		const date = new Date('2024-03-20')
		expect(formatDate(date)).toBe('March 20, 2024')
	})

	it('should format a date with custom locale', () => {
		const date = new Date('2024-03-20')
		expect(formatDate(date, 'fr-FR')).toBe('20 mars 2024')
	})

	it('should format a date with custom options', () => {
		const date = new Date('2024-03-20T00:00:00.000Z')
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'UTC',
		}
		expect(formatDate(date, 'en-US', options)).toBe(
			'Mar 20, 2024, 12:00 AM',
		)
	})

	it('should handle string date input', () => {
		expect(formatDate('2024-03-20')).toBe('March 20, 2024')
	})

	it('should handle timestamp input', () => {
		const timestamp = new Date('2024-03-20').getTime()
		expect(formatDate(timestamp)).toBe('March 20, 2024')
	})
})
