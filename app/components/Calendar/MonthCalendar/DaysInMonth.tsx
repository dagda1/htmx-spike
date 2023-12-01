import type { CalendarView } from '~/types';
import { getMonthInWeekBlocks } from '~/utils/dates';
import { DaysInMonthDesktop } from './DaysInMonthDesktop';
import { DaysInMonthMobile } from './DaysInMonthMobile';

interface DaysInMonth {
  startDate: Date;
  currentView: CalendarView;
}

export function DaysInMonth({ startDate }: DaysInMonth): JSX.Element {
  const daysInMonth = getMonthInWeekBlocks(startDate);
  return (
    <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
      <DaysInMonthDesktop startDate={startDate} daysInMonth={daysInMonth} />
      <DaysInMonthMobile startDate={startDate} daysInMonth={daysInMonth} />
    </div>
  );
}
