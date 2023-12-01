import { DateTime } from 'luxon';
import { isToday } from '~/utils/dates';
import cs from 'classnames';

interface DaysInMonthDesktopProps {
  startDate: Date;
  daysInMonth: DateTime[][];
}

export function DaysInMonthDesktop({ startDate, daysInMonth }: DaysInMonthDesktopProps): JSX.Element {
  return (
    <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
      {daysInMonth
        .flatMap((d) => d)
        .map((d) => {
          const currentMonth = d.month === DateTime.fromJSDate(startDate).month;
          const today = isToday(d.toJSDate());

          return (
            <div
              class={cs({
                ['relative bg-white px-3 py-2']: currentMonth,
                ['relative bg-gray-50 px-3 py-2 text-gray-500']: !currentMonth,
              })}
            >
              <time
                class={cs({
                  ['flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white']:
                    today,
                })}
                datetime={d.toFormat('yyyy-MM-dd')}
              >
                {d.toFormat('d')}
              </time>
            </div>
          );
        })}
    </div>
  );
}
