/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { freqs } from "./index.cljs";

export default {
	async fetch(request, env, ctx) {
		let url = new URL(request.url);
		let input = url.searchParams.get("input");
		return new Response(JSON.stringify(freqs(input)));
	},
};
