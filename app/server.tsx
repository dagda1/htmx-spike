import { Hono } from 'hono';
import type { ContextVars } from './types';
import { renderer } from './renederer/renderer';
import { getEvents, home } from './handlers';

const app = new Hono<{ Variables: ContextVars }>();

app.use('*', async (c, next) => {
  await next();
});

app.use('*', renderer);

app.get('/', home);
app.get('/events', getEvents);

export default app;
