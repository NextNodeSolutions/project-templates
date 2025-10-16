import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [preact(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			react: 'preact/compat',
			'react-dom': 'preact/compat',
		},
	},
	server: {
		port: 5173,
		strictPort: false,
		open: false,
	},
	build: {
		target: 'es2023',
		outDir: 'dist',
		sourcemap: true,
		minify: 'esbuild',
	},
})
