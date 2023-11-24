import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { AddSomething, Item, renderer } from './components';

const app = new Hono();

app.get('*', renderer);

app.get('/', (c) => {
  return c.render(
    <div>
      <AddSomething />
      <div id="something"></div>
    </div>,
  );
});

app.post(
  '/something',
  zValidator(
    'form',
    z.object({
      title: z.string().min(1),
    }),
  ),
  async (c) => {
    const { title } = c.req.valid('form');
    const id = crypto.randomUUID();
    return c.html(<Item title={title} id={id} />);
  },
);

app.delete('/something/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  c.status(200);
  return c.body(null);
});

export default app;
