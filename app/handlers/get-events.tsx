import type { HandlerContext } from '~/types';
import { AppShell } from '~/Layouts/AppShell';
import { Events } from '~/components/Events/Events';

export async function getEvents(c: HandlerContext): Promise<Response> {
  const trigger = c.req.header('HX-Trigger');

  if (trigger) {
    return c.render(<Events />);
  }

  return c.render(
    <AppShell>
      <Events />
    </AppShell>,
  );
}
