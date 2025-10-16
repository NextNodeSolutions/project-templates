import { type ComponentChildren } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { cn } from '@/lib/utils'

export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children?: ComponentChildren
	title?: string
	className?: string
}

export const Modal = ({ isOpen, onClose, children, title, className }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null)

	// Handle click outside
	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen, onClose])

	// Handle escape key
	useEffect(() => {
		if (!isOpen) return

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, onClose])

	// Lock body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

			{/* Modal */}
			<div
				ref={modalRef}
				className={cn(
					'relative z-50 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg',
					'dark:bg-gray-950',
					'max-h-[90vh] overflow-y-auto',
					className
				)}
			>
				{/* Header */}
				{title && (
					<div className="mb-4 flex items-center justify-between">
						<h2 className="text-lg font-semibold">{title}</h2>
						<button
							onClick={onClose}
							className={cn(
								'rounded-sm opacity-70 transition-opacity hover:opacity-100',
								'focus:outline-none focus:ring-2 focus:ring-gray-400'
							)}
							aria-label="Close modal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>
					</div>
				)}

				{/* Content */}
				<div>{children}</div>
			</div>
		</div>
	)
}
