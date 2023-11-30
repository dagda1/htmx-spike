import { Hono } from 'hono';
import { getEvents } from './handlers/get-events';
import type { ContextVars } from './types';
import { renderer } from './renederer/renderer';
// import { logger } from 'hono/logger';

const app = new Hono<{ Variables: ContextVars }>();

app.use('*', async (c, next) => {
  await next();
});

// TODO: is this useful?
// app.use('*', logger());
app.use('*', renderer);

app.get('/', (c) => c.redirect('/events'));
app.get('/events', getEvents);

export default app;
