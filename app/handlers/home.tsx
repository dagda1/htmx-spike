import { AppShell } from '~/Layouts/AppShell';
import type { HandlerContext } from '~/types';
import { HomePage } from '~/components/HomePage/HomePage';

export async function home(context: HandlerContext): Promise<Response> {
  const trigger = context.req.header('HX-Trigger');

  if (trigger) {
    return context.render(<HomePage />);
  }

  return context.render(
    <AppShell>
      <HomePage />
    </AppShell>,
  );
}
