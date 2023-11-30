import { parseShortDate } from '~/utils/dates';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import { DateTime } from 'luxon';
import type { CalendarView } from '~/types';
import { MonthCalendar } from './MonthCalendar/MonthCalendar';
import { useRequestContext } from 'hono/jsx-renderer';

const Views: Record<CalendarView, typeof WeekCalendar | typeof MonthCalendar> = {
  ['Week']: WeekCalendar,
  ['Month']: MonthCalendar,
} as const;

export function Calendar(): JSX.Element {
  const context = useRequestContext();

  // const trigger = c.req.header('HX-Trigger');
  const requestedDate = parseShortDate(context.req.query('date') ?? '') ?? new Date();
  const startDate = DateTime.fromJSDate(requestedDate).startOf('week');
  // const endDate = startDate.plus({ weeks: 1 });

  const currentView = (context.req.query('view') ?? 'Week') as CalendarView;

  const CalendarView = Views[currentView];

  return <CalendarView startDate={startDate.toJSDate()} events={[]} />;
}
