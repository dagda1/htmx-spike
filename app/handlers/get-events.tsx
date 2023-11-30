import type { HandlerContext } from '~/types';
import { AppShell } from '~/Layouts/AppShell';
import { Calendar } from '~/components/Calendar/Calendar';

export async function getEvents(c: HandlerContext): Promise<Response> {
  const trigger = c.req.header('HX-Trigger');

  if (trigger) {
    return c.render(<Calendar  />);
  }

  return c.render(
    <AppShell>
      <Calendar  />
    </AppShell>,
  );
}
