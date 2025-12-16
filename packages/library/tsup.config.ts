import { defineConfig } from 'tsup'

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		// Add additional entry points as needed:
		// 'subpath': 'src/subpath/index.ts',
	},
	format: ['esm'],
	dts: true,
	minify: true,
	treeshake: true,
	clean: true,
	sourcemap: false,
	target: 'es2023',
	splitting: true,
	external: ['@nextnode/logger'],
	outDir: 'dist',
})
