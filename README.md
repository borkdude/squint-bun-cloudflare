# Bun + Squint + Cloudflare

Run `bun --hot src/index.js` to start developing.
Go to `http://localhost:3000/?input=hellooooo` to test out the worker.

To deploy to cloudflare, run `bun wrangler deploy`.

The [squint](https://github.com/squint-cljs/squint) code is located in `src/index.cljs`.

The worker is visible [here](https://my-worker.borkdude.workers.dev/?input=hellooo).
