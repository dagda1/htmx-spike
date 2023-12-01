import type { CalendarProps } from '~/types';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { DaysOfTheWeek } from './DaysOfTheWeek';
import { DaysInMonth } from './DaysInMonth';

export function MonthCalendar({ startDate, events, currentView }: CalendarProps): JSX.Element {
  console.log({ startDate, events });

  return (
    <div class="lg:flex lg:h-full lg:flex-col" id="calendar">
      <CalendarHeader startDate={startDate} />
      <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <DaysOfTheWeek />
        </div>
        <DaysInMonth startDate={startDate} currentView={currentView} />
      </div>
    </div>
  );
}
