import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import { loadConfig } from '@nextnode/config-manager'
import type { Config } from './types/config.d.ts'

// Load configuration from config files
const config = loadConfig<Config>()
const { server } = config

// Environment variables override config
const host = process.env.HOST || server.host
const port = Number(process.env.PORT) || server.port
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
		resolve: {
			alias: {
				'@': new URL('./src/', import.meta.url).pathname,
			},
		},
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