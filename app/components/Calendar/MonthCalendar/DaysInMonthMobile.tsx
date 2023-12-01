import { DateTime } from 'luxon';
import { isToday } from '~/utils/dates';
import cs from 'classnames';

interface DaysInMonthMobileProps {
  startDate: Date;
  daysInMonth: DateTime[][];
}

export function DaysInMonthMobile({ startDate, daysInMonth }: DaysInMonthMobileProps): JSX.Element {
  return (
    <div class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
      {daysInMonth
        .flatMap((d) => d)
        .map((d) => {
          const currentMonth = d.month === DateTime.fromJSDate(startDate).month;
          const today = isToday(d.toJSDate());

          return (
            <button
              type="button"
              class={cs({
                ['flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10']: currentMonth,
                ['flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10']: !currentMonth,
                ['text-white']: today,
              })}
            >
              <time
                class={cs({ ['ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900']: today })}
                datetime={d.toFormat('yyyy-MM-dd')}
              >
                {d.toFormat('d')}
              </time>
              <span class="sr-only">0 events</span>
            </button>
          );
        })}
    </div>
  );
}
