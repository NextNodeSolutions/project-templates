import type { StorageConfig, StorageItem } from '@/types'
import { storageLogger } from './logger'

/**
 * Type-safe localStorage wrapper with automatic serialization
 * Inspired by florist-bouquet-preview's storage patterns
 */
export class LocalStorage<T> {
	private key: string
	private config: StorageConfig

	constructor(key: string, config: Partial<StorageConfig> = {}) {
		this.key = config.prefix ? `${config.prefix}:${key}` : key
		this.config = {
			prefix: '',
			version: '1.0',
			enableCompression: false,
			...config,
		}

		storageLogger.info('LocalStorage initialized', {
			key: this.key,
			version: this.config.version,
		})
	}

	/**
	 * Get item from localStorage
	 */
	get(): T | null {
		try {
			const item = localStorage.getItem(this.key)
			if (!item) return null

			const parsed = JSON.parse(item) as StorageItem<T>

			// Version check
			if (this.config.version && parsed.version !== this.config.version) {
				storageLogger.warn('Version mismatch, clearing storage', {
					key: this.key,
					expected: this.config.version,
					found: parsed.version,
				})
				this.clear()
				return null
			}

			return parsed.data
		} catch (error) {
			storageLogger.error('Failed to get item from storage', {
				key: this.key,
				error: error instanceof Error ? error.message : 'Unknown error',
			})
			return null
		}
	}

	/**
	 * Set item in localStorage
	 */
	set(data: T): void {
		try {
			const item: StorageItem<T> = {
				data,
				timestamp: Date.now(),
				version: this.config.version,
			}

			localStorage.setItem(this.key, JSON.stringify(item))
			storageLogger.info('Item saved to storage', {
				key: this.key,
				timestamp: item.timestamp,
			})
		} catch (error) {
			storageLogger.error('Failed to save item to storage', {
				key: this.key,
				error: error instanceof Error ? error.message : 'Unknown error',
			})
		}
	}

	/**
	 * Remove item from localStorage
	 */
	clear(): void {
		localStorage.removeItem(this.key)
		storageLogger.info('Item cleared from storage', { key: this.key })
	}

	/**
	 * Check if item exists
	 */
	exists(): boolean {
		return localStorage.getItem(this.key) !== null
	}
}

/**
 * Convert File to base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = reject
		reader.readAsDataURL(file)
	})
}

/**
 * Convert Blob to base64 string
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = reject
		reader.readAsDataURL(blob)
	})
}
