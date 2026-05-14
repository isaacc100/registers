const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      ...JSON_HEADERS,
      ...(init.headers || {}),
    },
  });
}

export function handleRequest(request) {
  const url = new URL(request.url);

  if (request.method === "GET" && url.pathname === "/health") {
    return json({ status: "ok" });
  }

  if (request.method === "GET" && url.pathname === "/") {
    return json({
      service: "register-pro",
      status: "bootstrapped",
      runtime: "cloudflare-workers",
    });
  }

  return json({ error: "Not Found" }, { status: 404 });
}

export default {
  fetch(request) {
    return handleRequest(request);
  },
};
