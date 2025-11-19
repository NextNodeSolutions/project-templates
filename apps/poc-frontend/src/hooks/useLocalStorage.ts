import { useState, useEffect, useCallback } from 'preact/hooks'
import { LocalStorage } from '@/lib/storage'

/**
 * Hook for type-safe localStorage with automatic synchronization
 * Inspired by florist-bouquet-preview patterns
 *
 * @example
 * const [user, setUser] = useLocalStorage('user', { name: 'Guest' })
 */
export const useLocalStorage = <T>(
	key: string,
	initialValue: T,
	config?: { prefix?: string; version?: string }
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
	const storage = new LocalStorage<T>(key, config)

	// Initialize state with value from localStorage or initial value
	const [storedValue, setStoredValue] = useState<T>(() => {
		const item = storage.get()
		return item !== null ? item : initialValue
	})

	// Update localStorage when state changes
	const setValue = useCallback(
		(value: T | ((prev: T) => T)) => {
			setStoredValue((prev) => {
				const newValue = value instanceof Function ? value(prev) : value
				storage.set(newValue)
				return newValue
			})
		},
		[storage]
	)

	// Clear function
	const clearValue = useCallback(() => {
		storage.clear()
		setStoredValue(initialValue)
	}, [storage, initialValue])

	// Sync with localStorage changes from other tabs
	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === key && e.newValue) {
				try {
					const parsed = JSON.parse(e.newValue)
					setStoredValue(parsed.data)
				} catch {
					// Ignore parse errors
				}
			}
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [key])

	return [storedValue, setValue, clearValue]
}
