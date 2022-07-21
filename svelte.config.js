import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { makeServer } from '$lib/server';

makeServer();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	},
	prerender: {
		enabled: false,
		default: false
	},
	ssr: false,
	preprocess: sveltePreprocess()
};

export default config;
