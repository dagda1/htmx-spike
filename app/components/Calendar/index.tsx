import { parseShortDate } from '@/utils/dates';
import WeekCalendar from './WeekCalendar';
import { DateTime } from 'luxon';
import type { Context } from 'hono';

export function Calendar(c: Context): JSX.Element {
  // const trigger = c.req.header('HX-Trigger');
  const requestedDate = parseShortDate(c.req.query('date') ?? '') ?? new Date();
  const startDate = DateTime.fromJSDate(requestedDate).startOf('week');
  // const endDate = startDate.plus({ weeks: 1 });

  return <WeekCalendar startDate={startDate.toJSDate()} events={[]} />;
}