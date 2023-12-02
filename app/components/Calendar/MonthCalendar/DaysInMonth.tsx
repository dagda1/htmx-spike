import type { CalendarView } from '~/types';
import { getMonthInWeekBlocks } from '~/utils/dates';
import { DaysInMonthDesktop } from './DaysInMonthDesktop';
import { DaysInMonthMobile } from '../DaysInMonthMobile/DaysInMonthMobile';

interface DaysInMonth {
  startDate: Date;
  currentView: CalendarView;
}

const calendarCss = {
  currentMonth: 'flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10',
  previousMonth: 'flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10',
  todayMonth: 'ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900',
  todayTime: 'ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900',
} as const;

export function DaysInMonth({ startDate }: DaysInMonth): JSX.Element {
  const daysInMonth = getMonthInWeekBlocks(startDate);
  return (
    <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
      <DaysInMonthDesktop startDate={startDate} daysInMonth={daysInMonth} />
      <DaysInMonthMobile
        startDate={startDate}
        daysInMonth={daysInMonth}
        calendarCss={{ ...calendarCss }}
        className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden"
      />
    </div>
  );
}
