import { Hono } from 'hono';
import { getEvents } from './handlers/get-events';
import type { ContextVars } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app = new Hono<{ Variables: ContextVars }>();

app.get('/', (c) => c.redirect('/events'));
app.get('/events', getEvents);

export default app;