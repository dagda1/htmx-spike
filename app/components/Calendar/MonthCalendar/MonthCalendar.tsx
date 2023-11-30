
import type { CalendarProps } from '~/types';
import { ViewSelector } from '../ViewSelector/ViewSelector';

export function MonthCalendar({ startDate, events }: CalendarProps): JSX.Element {
  console.log({ startDate, events })

  return (<div class="hidden md:ml-4 md:flex md:items-center">
    <ViewSelector /></div>)
};