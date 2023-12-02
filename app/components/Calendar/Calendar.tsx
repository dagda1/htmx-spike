import { parseShortDate } from '~/utils/dates';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import type { CalendarProps, CalendarView } from '~/types';
import { MonthCalendar } from './MonthCalendar/MonthCalendar';
import { useRequestContext } from 'hono/jsx-renderer';
import { DefaultView } from '~/constants';
import { EventCalendar } from './EventCalendar/EventCalendar';

const Views: Record<CalendarView, (props: CalendarProps) => JSX.Element> = {
  ['week']: WeekCalendar,
  ['month']: MonthCalendar,
  ['events']: EventCalendar,
} as const;

export function Calendar(): JSX.Element {
  const context = useRequestContext();

  const currentView = (context.req.query('view') ?? DefaultView) as CalendarView;

  const CalendarView = Views[currentView];

  const requestedDate = parseShortDate(context.req.query('date') ?? '') ?? new Date();

  return <CalendarView startDate={requestedDate} currentView={currentView} events={[]} />;
}
