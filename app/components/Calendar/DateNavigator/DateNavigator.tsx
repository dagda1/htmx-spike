import { DefaultDateFormat } from '~/constants';
import { DateTime } from 'luxon';
import { useRequestContext } from 'hono/jsx-renderer';

export interface DateNavigatorProps {
  previous: Date;
  next: Date;
}

const DateKey = 'date';

function setDateInUrl(currentUrl: string, date: string) {
  const url = new URL(currentUrl);

  const searchParams = new URLSearchParams(url.search);

  searchParams.delete(DateKey);

  searchParams.set(DateKey, date);

  return `${url.pathname}?${searchParams.toString()}`;
}

function DateNavigator({ previous, next }: DateNavigatorProps): JSX.Element {
  const context = useRequestContext();

  const previousUrl = setDateInUrl(context.req.url, DateTime.fromJSDate(previous).toFormat(DefaultDateFormat));
  const nextUrl = setDateInUrl(context.req.url, DateTime.fromJSDate(next).toFormat(DefaultDateFormat));

  return (
    <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
      <button
        id="prev-week-btn"
        class="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
        hx-get={previousUrl}
        hx-target="#calendar"
        hx-push-url="true"
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d={`M 15.41 7.41 L 14 6 L 8 12 L 14 18 L 15.41 16.59 L 10.83 12 Z`} />
        </svg>
      </button>
      <button
        id="today-btn"
        class="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
        hx-get="/events"
        hx-target="#calendar"
        hx-push-url="true"
      >
        <span class="toolbar-button-label">Today</span>
      </button>
      <button
        id="next-week-btn"
        class="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
        hx-get={nextUrl}
        hx-target="#calendar"
        hx-push-url="true"
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d={`M 8.59 16.59 L 10 18 L 16 12 L 10 6 L 8.59 7.41 L 13.17 12 Z`} />
        </svg>
      </button>
    </div>
  );
}

export default DateNavigator;
