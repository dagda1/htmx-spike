import type { CalendarProps } from '~/types';
import { ShortDaysOfTheWeek } from '../ShortDaysOfWeek/ShortDaysOfTheWeek';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { DaysInMonthMobile } from '../DaysInMonthMobile/DaysInMonthMobile';
import { getMonthInWeekBlocks } from '~/utils/dates';
import { UpcomingEvents } from './UpcomingEvents';

const calendarCss = {
  currentMonth: 'bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10',
  previousMonth: 'bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10',
  todayMonth: 'text-white',
  todayTime: 'mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white',
} as const;

export function EventCalendar({ startDate }: CalendarProps): JSX.Element {
  const daysInMonth = getMonthInWeekBlocks(startDate);
  return (
    <div id="calendar">
      <h2 class="text-base font-semibold leading-6 text-gray-900">Upcoming Events</h2>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <CalendarHeader startDate={startDate} />
          <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <ShortDaysOfTheWeek />
          </div>
          <DaysInMonthMobile
            startDate={startDate}
            daysInMonth={daysInMonth}
            calendarCss={{ ...calendarCss }}
            className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
          />
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
}
