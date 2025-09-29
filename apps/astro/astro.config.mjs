import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import { logger } from '@nextnode/logger'

const host = process.env.HOST || '0.0.0.0'
const port = Number(process.env.PORT) || 4321
const site = process.env.URL || `http://${host}:${port}`

// Log configuration for debugging
logger.info('Configuration loaded', {
	details: {
		host,
		port,
		site,
		environment: process.env.NODE_ENV || 'development',
	},
})

// https://astro.build/config
export default defineConfig({
	site,
	server: {
		port,
		host,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		sitemap({
			filter: page => {
				// Exclude API endpoints, debug pages, health checks, and error pages
				return (
					!page.includes('/api/') &&
					!page.includes('/debug/') &&
					!page.includes('/health') &&
					!page.includes('/metrics') &&
					!page.includes('/404') &&
					!page.includes('/500')
				)
			},
		}),
	],
	output: 'server',
	compressHTML: true,
	experimental: {
		optimizeHoistedScript: true,
	},
})