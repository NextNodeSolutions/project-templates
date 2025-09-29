import { afterEach, beforeEach } from 'vitest'

// Global test setup
// This file is run before each test file

// Mock console methods to avoid noise in tests
global.console = {
	...console,
	// Uncomment to ignore specific console methods in tests
	// log: vi.fn(),
	// warn: vi.fn(),
	// error: vi.fn(),
}

// Setup global test utilities
beforeEach(() => {
	// Clean up any test artifacts between tests
	// This is automatically handled by vitest restoreMocks: true
})

afterEach(() => {
	// Additional cleanup if needed
	// vitest handles most cleanup with clearMocks and restoreMocks
})
