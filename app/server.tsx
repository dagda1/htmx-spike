import { Hono } from 'hono';
import { getEvents } from './handlers/get-events';
import type { ContextVars } from './types';
import { logger } from 'hono/logger';
import { renderer } from './renederer/renderer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app = new Hono<{ Variables: ContextVars }>();

app.use('*', async (c, next) => {
  await next();
});

app.use('*', logger());
app.use('*', renderer);

app.get('/', (c) => c.redirect('/events'));
app.get('/events', getEvents);

export default app;
