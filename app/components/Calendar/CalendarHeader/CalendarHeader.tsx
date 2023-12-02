import { DateTime } from 'luxon';
// import { Events } from '../Events/Events';
// import { ViewSelector } from '../ViewSelector/ViewSelector';
import { DefaultView, LongMonth, LongYear } from '~/constants';
import DateNavigator from '../DateNavigator/DateNavigator';
import { useRequestContext } from 'hono/jsx-renderer';
import type { CalendarView } from '~/types';

interface CalendarHeaderProps {
  startDate: Date;
}

export function CalendarHeader({ startDate }: CalendarHeaderProps): JSX.Element {
  const context = useRequestContext();

  const currentView = (context.req.query('view') ?? DefaultView) as CalendarView;

  const start = DateTime.fromJSDate(startDate);
  const monthName = start.toFormat(LongMonth);
  const year = start.toFormat(LongYear);

  const previous = currentView === 'week' ? { weeks: -1 } : { months: -1 };
  const next = currentView === 'week' ? { weeks: 1 } : { months: 1 };

  return (
    <header class="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        <time datetime="2022-01">
          {monthName} {year}
        </time>
      </h1>
      <div class="flex items-center">
        <DateNavigator
          previous={DateTime.fromJSDate(startDate).plus(previous).toJSDate()}
          next={DateTime.fromJSDate(startDate).plus(next).toJSDate()}
        />
        {/* <div class="hidden md:ml-4 md:flex md:items-center">
          <ViewSelector />
          <div class="ml-6 h-6 w-px bg-gray-300"></div>
          <button
            type="button"
            class="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            hx-get="/events/add"
            hx-target="body"
            hx-swap="beforeend"
          >
            Add event
          </button>
        </div>
        <Events /> */}
      </div>
    </header>
  );
}
