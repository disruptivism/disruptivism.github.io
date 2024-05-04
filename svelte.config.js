import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';

// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
		}),
	}
};

export default config;
