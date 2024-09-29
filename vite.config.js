import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: 'frontend2425',
	build: {
		outDir: 'docs',
		emptyOutDir: true
	}
});
