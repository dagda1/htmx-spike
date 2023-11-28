import { parseShortDate } from '@/utils/dates';
import { DateTime } from 'luxon';
import WeekCalendar from '@/components/Calendar/WeekCalendar';
import type { HandlerContext } from '@/types';
import { AppShell } from '@/Layouts/AppShell';

export async function getEvents(c: HandlerContext): Promise<Response> {
  // const trigger = c.req.header('HX-Trigger');
  const requestedDate = parseShortDate(c.req.query('date') ?? '') ?? new Date();
  const startDate = DateTime.fromJSDate(requestedDate).startOf('week');
  // const endDate = startDate.plus({ weeks: 1 });

  return c.html(
    <AppShell>
      <WeekCalendar startDate={startDate.toJSDate()} events={[]} />
    </AppShell>,
  );
}
