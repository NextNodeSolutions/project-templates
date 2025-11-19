import { type ComponentChildren } from 'preact'
import { cn } from '@/lib/utils'

export interface CardProps extends preact.JSX.HTMLAttributes<HTMLDivElement> {
	children?: ComponentChildren
}

export const Card = ({ className, children, ...props }: CardProps) => {
	return (
		<div
			className={cn(
				'rounded-lg border bg-white shadow-sm',
				'dark:border-gray-800 dark:bg-gray-950',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export const CardHeader = ({ className, children, ...props }: CardProps) => {
	return (
		<div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
			{children}
		</div>
	)
}

export const CardTitle = ({ className, children, ...props }: CardProps) => {
	return (
		<h3
			className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
			{...props}
		>
			{children}
		</h3>
	)
}

export const CardDescription = ({ className, children, ...props }: CardProps) => {
	return (
		<p className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props}>
			{children}
		</p>
	)
}

export const CardContent = ({ className, children, ...props }: CardProps) => {
	return (
		<div className={cn('p-6 pt-0', className)} {...props}>
			{children}
		</div>
	)
}

export const CardFooter = ({ className, children, ...props }: CardProps) => {
	return (
		<div className={cn('flex items-center p-6 pt-0', className)} {...props}>
			{children}
		</div>
	)
}
