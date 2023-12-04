import { Hono } from 'hono';
import type { ContextVars } from './types';
import { renderer } from './renederer/renderer';
import { connect, home } from './handlers';
import { EventService } from './services/event-services';
import { events } from './handlers/events';

const app = new Hono<{ Variables: ContextVars }>();

app.use('*', async (c, next) => {
  await next();
});

const eventService = new EventService();

app.use('*', async (context, next) => {
  context.set('eventService', eventService);
  await next();
});
app.use('*', renderer);

app.get('/', home);
app.get('/connect', connect);
app.get('/events', events);

export default app;
