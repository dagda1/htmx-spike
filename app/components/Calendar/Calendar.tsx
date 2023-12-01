import { parseShortDate } from '~/utils/dates';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import type { CalendarView } from '~/types';
import { MonthCalendar } from './MonthCalendar/MonthCalendar';
import { useRequestContext } from 'hono/jsx-renderer';
import { DefaultView } from '~/constants';

const Views: Record<CalendarView, typeof WeekCalendar | typeof MonthCalendar> = {
  ['Week']: WeekCalendar,
  ['Month']: MonthCalendar,
} as const;

export function Calendar(): JSX.Element {
  const context = useRequestContext();

  const currentView = (context.req.query('view') ?? DefaultView) as CalendarView;

  const CalendarView = Views[currentView];

  const requestedDate = parseShortDate(context.req.query('date') ?? '') ?? new Date();

  return <CalendarView startDate={requestedDate} currentView={currentView} events={[]} />;
}
