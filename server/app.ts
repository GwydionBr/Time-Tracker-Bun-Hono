import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serveStatic } from 'hono/bun';
import * as routes from './routes';

const app = new Hono();

app.use('*', logger())

app.route('/api/test', routes.testRoute)
// const apiRoutes = app.basePath("/api").route("/test", routes.testRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app;
// export type ApiRoutes = typeof apiRoutes