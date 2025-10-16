/**
 * Base resource interface for data with timestamps
 */
export interface BaseResource {
	id: string
	createdAt?: string
	updatedAt?: string
}

/**
 * Generic storage item with metadata
 */
export interface StorageItem<T> {
	data: T
	timestamp: number
	version?: string
}

/**
 * Local storage configuration
 */
export interface StorageConfig {
	prefix: string
	version?: string
	enableCompression?: boolean
}
