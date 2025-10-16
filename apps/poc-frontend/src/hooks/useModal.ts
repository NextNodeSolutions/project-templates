import { useState, useCallback, useEffect } from 'preact/hooks'

/**
 * Hook for managing modal state with keyboard support
 *
 * @example
 * const { isOpen, open, close, toggle } = useModal()
 */
export const useModal = (
	initialState = false,
	options?: {
		closeOnEscape?: boolean
		onOpen?: () => void
		onClose?: () => void
	}
) => {
	const [isOpen, setIsOpen] = useState(initialState)

	const open = useCallback(() => {
		setIsOpen(true)
		options?.onOpen?.()
	}, [options])

	const close = useCallback(() => {
		setIsOpen(false)
		options?.onClose?.()
	}, [options])

	const toggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	// Handle Escape key
	useEffect(() => {
		if (!options?.closeOnEscape || !isOpen) return

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, close, options?.closeOnEscape])

	return {
		isOpen,
		open,
		close,
		toggle,
	}
}
