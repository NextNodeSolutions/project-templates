/**
 * Formats a date into a localized string
 * @param date - The date to format
 * @param locale - The locale to use for formatting (defaults to 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
	date: Date | string | number,
	locale: string = 'en-US',
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
): string {
	const dateObj = new Date(date)
	return new Intl.DateTimeFormat(locale, options).format(dateObj)
}
