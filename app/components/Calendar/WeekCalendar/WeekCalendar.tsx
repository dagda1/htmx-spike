// import WeekNavigation from '~/components/Calendar/WeekNavigation';
import DayCalendar from '~/components/Calendar/DayCalendar/DayCalendar';
import { mapRange } from '~/utils/arrays';
import { isToday } from '~/utils/dates';
import { DateTime } from 'luxon';
import { DefaultDateFormat, LongMonth, LongYear } from '~/constants';
import { formatHour } from '~/utils/dates';
import cs from 'classnames';
import WeekNavigation from '../WeekNavigation/WeekNavigation';
import { ViewSelector } from '../ViewSelector/ViewSelector';
import type { CalendarProps } from '~/types';

function WeekCalendar({ startDate, events }: CalendarProps): JSX.Element {
  const start = DateTime.fromJSDate(startDate);
  const monthName = start.toFormat(LongMonth);
  const year = start.toFormat(LongYear);

  const dateString = start.toFormat(DefaultDateFormat);

  return (
    <div
      id="calendar"
      class="week-calendar"
      hx-get={`/events?date=${dateString}`}
      hx-swap="morph:outerHTML"
      hx-trigger="calendar:eventsChanged from:body"
    >
      <div class="flex h-full flex-col">
        <header class="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
          <h1 class="text-base font-semibold leading-6 text-gray-900">
            <time datetime="2022-01">
              {monthName} {year}
            </time>
          </h1>
          <div class="flex items-center">
            <WeekNavigation
              prevWeek={DateTime.fromJSDate(startDate).plus({ weeks: -1 }).toJSDate()}
              nextWeek={DateTime.fromJSDate(startDate).plus({ weeks: 1 }).toJSDate()}
            />
            <div class="hidden md:ml-4 md:flex md:items-center">
              <ViewSelector />
              <div class="ml-6 h-6 w-px bg-gray-300"></div>
              <button
                type="button"
                class="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add event
              </button>
            </div>
            <div class="relative ml-6 md:hidden">
              <button
                type="button"
                class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                id="menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open menu</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </button>

              {/*
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->*/}
              <div
                class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-0-button"
                tabIndex="-1"
              >
                <div class="py-1" role="none">
                  {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-0"
                  >
                    Create event
                  </a>
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-1"
                  >
                    Go to today
                  </a>
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-2"
                  >
                    Day view
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-3"
                  >
                    Week view
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-4"
                  >
                    Month view
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-0-item-5"
                  >
                    Year view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="isolate flex flex-auto flex-col overflow-auto bg-white">
          <div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
            <div class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
              <div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                {mapRange(7, (dayOffset) => {
                  const day = DateTime.fromJSDate(startDate).plus({ days: dayOffset });

                  const today = isToday(day.toJSDate());
                  return (
                    <button type="button" class="flex flex-col items-center pb-3 pt-2">
                      {day.toFormat('ccc').charAt(0)}{' '}
                      <span
                        class={cs({
                          ['mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900']: !today,
                          ['mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white']:
                            today,
                        })}
                      >
                        {day.toFormat('d')}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                <div class="col-end-1 w-14"></div>
                {mapRange(7, (dayOffset) => {
                  const day = DateTime.fromJSDate(startDate).plus({ days: dayOffset });
                  const dayEvents = events
                    .filter((e) => DateTime.fromJSDate(e.startDay).weekday === day.weekday)
                    .sort((a, b) => a.startHour + a.startMinute - (b.startHour + b.startMinute));

                  const today = isToday(day.toJSDate());

                  return (
                    <div class="flex items-center justify-center py-3">
                      <span class={cs(today && 'flex items-baseline')}>
                        {day.toFormat('ccc')}{' '}
                        <span
                          class={cs({
                            ['items-center justify-center font-semibold text-gray-900']: !today,
                            ['ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white']:
                              today,
                          })}
                        >
                          {day.toFormat('d')}
                        </span>
                      </span>
                      <div class="day-column-content">
                        <DayCalendar startDate={day.toJSDate()} events={dayEvents} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="flex flex-auto">
              <div class="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100"></div>
              <div class="grid flex-auto grid-cols-1 grid-rows-1">
                {/* Horizontal lines */}
                <div
                  class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                  style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
                >
                  <div class="row-end-1 h-7"></div>
                  {mapRange(24, (hour) => {
                    return (
                      <>
                        <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                          {formatHour(hour)}
                        </div>
                        <div></div>
                      </>
                    );
                  })}
                </div>

                {/* Vertical lines -->*/}
                <div class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                  <div class="col-start-1 row-span-full"></div>
                  <div class="col-start-2 row-span-full"></div>
                  <div class="col-start-3 row-span-full"></div>
                  <div class="col-start-4 row-span-full"></div>
                  <div class="col-start-5 row-span-full"></div>
                  <div class="col-start-6 row-span-full"></div>
                  <div class="col-start-7 row-span-full"></div>
                  <div class="col-start-8 row-span-full w-8"></div>
                </div>

                {/* !-- Events -->*/}
                <ol
                  class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                  style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
                >
                  <li class="relative mt-px flex sm:col-start-3" style="grid-row: 74 / span 12">
                    <a
                      href="#"
                      class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                    >
                      <p class="order-1 font-semibold text-blue-700">Breakfast</p>
                      <p class="text-blue-500 group-hover:text-blue-700">
                        <time datetime="2022-01-12T06:00">6:00 AM</time>
                      </p>
                    </a>
                  </li>
                  <li class="relative mt-px flex sm:col-start-3" style="grid-row: 92 / span 30">
                    <a
                      href="#"
                      class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                    >
                      <p class="order-1 font-semibold text-pink-700">Flight to Paris</p>
                      <p class="text-pink-500 group-hover:text-pink-700">
                        <time datetime="2022-01-12T07:30">7:30 AM</time>
                      </p>
                    </a>
                  </li>
                  <li class="relative mt-px hidden sm:col-start-6 sm:flex" style="grid-row: 122 / span 24">
                    <a
                      href="#"
                      class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
                    >
                      <p class="order-1 font-semibold text-gray-700">Meeting with design team at Disney</p>
                      <p class="text-gray-500 group-hover:text-gray-700">
                        <time datetime="2022-01-15T10:00">10:00 AM</time>
                      </p>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekCalendar;
