import { type ComponentChildren } from 'preact'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-blue-600 text-white hover:bg-blue-700',
				destructive: 'bg-red-600 text-white hover:bg-red-700',
				outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
				secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
				ghost: 'hover:bg-gray-100 hover:text-gray-900',
				link: 'text-blue-600 underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends Omit<preact.JSX.HTMLAttributes<HTMLButtonElement>, 'size'>,
		VariantProps<typeof buttonVariants> {
	children?: ComponentChildren
	type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
	className,
	variant,
	size,
	type = 'button',
	...props
}: ButtonProps) => {
	return (
		<button type={type} className={cn(buttonVariants({ variant, size, className }))} {...props} />
	)
}
