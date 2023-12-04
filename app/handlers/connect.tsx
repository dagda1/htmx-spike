import type { HandlerContext } from '~/types';
import { AppShell } from '~/Layouts/AppShell';
import { Connect } from '~/Pages/Connect/Connect';

export async function connect(c: HandlerContext): Promise<Response> {
  const trigger = c.req.header('HX-Trigger');

  if (trigger) {
    return c.render(<Connect />);
  }

  return c.render(
    <AppShell>
      <Connect />
    </AppShell>,
  );
}
