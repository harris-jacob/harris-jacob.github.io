import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		preprocess({
      preserve: ['module']
    }),
		mdsvex({extensions: ['.md', '.svelte']})
],
	kit: {
		adapter: adapter(),
	}
};

export default config;
