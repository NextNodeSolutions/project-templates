import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 *
 * @example
 * cn('px-4 py-2', 'bg-blue-500', isActive && 'bg-red-500')
 * // Returns: 'px-4 py-2 bg-red-500' (bg-blue-500 is overridden)
 */
export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs))
}

/**
 * Format a date to a localized string
 */
export const formatDate = (date: Date | string | number): string => {
	const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
	return dateObj.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

/**
 * Generate a unique ID
 */
export const generateId = (): string => {
	return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Debounce function execution
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
	fn: T,
	delay: number
): ((...args: Parameters<T>) => void) => {
	let timeoutId: ReturnType<typeof setTimeout> | undefined

	return (...args: Parameters<T>) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

/**
 * Throttle function execution
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
	fn: T,
	limit: number
): ((...args: Parameters<T>) => void) => {
	let inThrottle = false

	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			fn(...args)
			inThrottle = true
			setTimeout(() => {
				inThrottle = false
			}, limit)
		}
	}
}
