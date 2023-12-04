import { DateTime } from 'luxon';
import { isToday } from '~/utils/dates';
import cs from 'classnames';

interface CalendarCSS {
  currentMonth: string;
  previousMonth: string;
  todayMonth: string;
  todayTime: string;
}

interface DaysInMonthMobileProps {
  startDate: Date;
  daysInMonth: DateTime[][];
  calendarCss: CalendarCSS;
  className?: string;
}

export function DaysInMonthMobile({
  startDate,
  daysInMonth,
  calendarCss: { currentMonth, previousMonth, todayMonth, todayTime },
  className,
}: DaysInMonthMobileProps): JSX.Element {
  return (
    <div class={className}>
      {daysInMonth
        .flatMap((d) => d)
        .map((d, i) => {
          const isCurrentMonth = d.month === DateTime.fromJSDate(startDate).month;
          const today = isToday(d.toJSDate());

          const length = daysInMonth.length * daysInMonth[0].length;

          return (
            <button
              type="button"
              class={cs({
                ['rounded-tl-lg']: i === 0,
                ['rounded-tr-lg']: i === daysInMonth[0].length - 1,
                ['rounded-bl-lg']: i === length - 7,
                ['rounded-br-lg']: i === length - 1,
                [previousMonth]: isCurrentMonth,
                [currentMonth]: !isCurrentMonth,
                [todayMonth]: today,
              })}
            >
              <time
                class={cs('mx-auto flex h-7 w-7 items-center justify-center rounded-full', { [todayTime]: today })}
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
