import assert from "node:assert/strict";
import test from "node:test";
import { handleRequest } from "../src/index.js";

test("GET /health returns ok status", async () => {
  const response = await handleRequest(new Request("https://example.com/health"));
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, { status: "ok" });
});

test("GET / returns bootstrap metadata", async () => {
  const response = await handleRequest(new Request("https://example.com/"));
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.service, "register-pro");
  assert.equal(body.status, "bootstrapped");
  assert.equal(body.runtime, "cloudflare-workers");
});

test("unknown route returns 404", async () => {
  const response = await handleRequest(new Request("https://example.com/missing"));
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.deepEqual(body, { error: "Not Found" });
});
