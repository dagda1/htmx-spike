import { DateTime } from 'luxon';
import type { CalendarView } from '~/types';
import { getFirstMonday, getLast7DaysOfMonth } from '~/utils/dates';

function getMonthInWeekBlocks(startDate: Date): DateTime[][] {
  const weeks = [];
  const firstMonday = DateTime.fromJSDate(getFirstMonday(startDate, 'Month'));
  const lastMonday = getLast7DaysOfMonth(startDate);

  for (
    let weekStart = firstMonday;
    weekStart <= DateTime.fromISO(lastMonday[0]);
    weekStart = weekStart.plus({ days: 7 })
  ) {
    const week = [];
    for (let day = 0; day < 7; day++) {
      week.push(weekStart.plus({ days: day }));
    }
    weeks.push(week);
  }

  return weeks;
}

interface DaysInMonth {
  startDate: Date;
  currentView: CalendarView;
}

export function DaysInMonth({ startDate }: DaysInMonth): JSX.Element {
  const daysInMonth = getMonthInWeekBlocks(startDate);
  console.log(daysInMonth);
  return (
    <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
      <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
        {daysInMonth
          .flatMap((d) => d)
          .map((d) => (
            <div class="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time datetime={d.toFormat('yyyy-MM-dd')}>{d.toFormat('d')}</time>
            </div>
          ))}
      </div>
    </div>
  );
}
