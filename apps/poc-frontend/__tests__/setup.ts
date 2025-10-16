import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/preact'

// Cleanup after each test
afterEach(() => {
	cleanup()
	vi.clearAllMocks()
})

// Mock localStorage
const localStorageMock = (() => {
	let store: Record<string, string> = {}

	return {
		getItem: (key: string) => store[key] ?? null,
		setItem: (key: string, value: string) => {
			store[key] = value.toString()
		},
		removeItem: (key: string) => {
			delete store[key]
		},
		clear: () => {
			store = {}
		},
		get length() {
			return Object.keys(store).length
		},
		key: (index: number) => {
			const keys = Object.keys(store)
			return keys[index] ?? null
		},
	}
})()

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock,
	writable: true,
})
