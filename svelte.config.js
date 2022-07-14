import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		prerender: {
			default: true,
		},
		paths: {
			base: "/sicl-showcase",
		}
	},
	preprocess: sveltePreprocess(),
};

export default config;
