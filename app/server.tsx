import { Hono } from 'hono';
import { renderer } from './renderer';
import { Calendar } from './components/Calendar';

const app = new Hono();

app.get('*', renderer);

app.get('/', (c) => {
  return c.render(
    <>
      <Calendar />
    </>,
  );
});

export default app;
