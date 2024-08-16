import app from './app';

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 3030,
});

console.log("Server running!")