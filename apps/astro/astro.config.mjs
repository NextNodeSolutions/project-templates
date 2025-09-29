import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'

const host = process.env.HOST || '0.0.0.0'
const port = Number(process.env.PORT) || 4321
const site = process.env.URL || `http://${host}:${port}`

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
	output: 'server',
	compressHTML: true,
	experimental: {
		optimizeHoistedScript: true,
	},
})