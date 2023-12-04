import { Events } from '~/components/Events/Events';
import type { HandlerContext } from '~/types';

export async function events(c: HandlerContext): Promise<Response> {
  const { eventService } = c.var;

  const events = await eventService.get();

  return c.render(<Events events={events} />);
}
