# Register Pro (Bootstrap)

Initial implementation scaffold for an edge-first Cloudflare deployment.

## What is included

- Cloudflare Worker entrypoint (`src/index.js`)
- Basic health endpoint (`GET /health`)
- Basic service descriptor endpoint (`GET /`)
- Node test coverage for the initial request handler (`test/worker.test.js`)
- Wrangler configuration (`wrangler.toml`)

## Run tests

```bash
npm test
```
