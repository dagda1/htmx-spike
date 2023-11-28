import type { CalendarEvent } from '@/components/Calendar/models/event';
// import WeekNavigation from '@/components/Calendar/WeekNavigation';
// import DayCalendar from '@/components/Calendar/DayCalendar';
// import { mapRange } from '@/utils/arrays';
// import { formatHour, isToday } from '@/utils/dates';
import { DateTime } from 'luxon';
import { DefaultDateFormat, LongMonth, LongYear } from '@/constants';

export interface WeekCalendarProps {
  startDate: Date;
  events: CalendarEvent[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function WeekCalendar({ startDate, events }: WeekCalendarProps): JSX.Element {
  console.log(startDate);
  const start = DateTime.fromJSDate(startDate);
  const monthName = start.toFormat(LongMonth);
  const year = start.toFormat(LongYear);

  const dateString = start.toFormat(DefaultDateFormat);

  return (
    <div
      id="calendar"
      class="week-calendar"
      hx-get={`/events?date=${dateString}`}
      hx-swap="outerHTML"
      hx-trigger="calendar:eventsChanged from:body"
    >
      {/* <div class="month-year-header">
          <span class="month-label">{monthName}</span>
          <span class="year-label">{year}</span>
          <button id="add-event-btn" class="toolbar-button" hx-get="/events/add" hx-target="body" hx-swap="beforeend">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d={`M 11 5 L 13 5 L 13 11 L 19 11 L 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 Z`}
              />
            </svg>
          </button>
        </div>
        <WeekNavigation
          prevWeek={DateTime.fromJSDate(startDate).plus({ weeks: -1 }).toJSDate()}
          nextWeek={DateTime.fromJSDate(startDate).plus({ weeks: 1 }).toJSDate()}
        />
      </div>
      <div class="day-grid">
        <div class="time-legend-grid">
          <div class="time-legend-cell">
            <label class="time-legend-label all-day-legend">all-day</label>
          </div>
          {mapRange(24, (hour) => {
            return (
              <div class="time-legend-cell">
                <label class="time-legend-label">{formatHour(hour)}</label>
              </div>
            );
          })}
        </div>
        {mapRange(7, (dayOffset) => {
          const day = DateTime.fromJSDate(startDate).plus({ days: dayOffset });
          const dayEvents = events
            .filter((e) => DateTime.fromJSDate(e.startDay).weekday === day.weekday)
            .sort((a, b) => a.startHour + a.startMinute - (b.startHour + b.startMinute));
          return (
            <div class="day-column">
              <div class="day-column-header">
                <span>{day.toFormat('EEE')}</span>
                <span className={isToday(day.toJSDate()) ? 'today-date' : null}>{day.toFormat('d')}</span>
              </div>
              <div class="day-column-content">
                <DayCalendar startDate={day.toJSDate()} events={dayEvents} />
              </div>
            </div>
          );
        })}*/}
      <div class="flex h-full flex-col">
        <header class="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
          <h1 class="text-base font-semibold leading-6 text-gray-900">
            <time datetime="2022-01">
              {monthName} {year}
            </time>
          </h1>
          <div class="flex items-center">
            <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
              <button
                type="button"
                class="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
              >
                <span class="sr-only">Previous week</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
              >
                Today
              </button>
              <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
              <button
                type="button"
                class="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
              >
                <span class="sr-only">Next week</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden md:ml-4 md:flex md:items-center">
              <div class="relative">
                <button
                  type="button"
                  class="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Week view
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
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
                  class="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div class="py-1" role="none">
                    {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Day view
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Week view
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Month view
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Year view
                    </a>
                  </div>
                </div>
              </div>
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
                class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  M <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">10</span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  T <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">11</span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  W{' '}
                  <span class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    12
                  </span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  T <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">13</span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  F <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">14</span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  S <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">15</span>
                </button>
                <button type="button" class="flex flex-col items-center pb-3 pt-2">
                  S <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">16</span>
                </button>
              </div>

              <div class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                <div class="col-end-1 w-14"></div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Mon <span class="items-center justify-center font-semibold text-gray-900">10</span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Tue <span class="items-center justify-center font-semibold text-gray-900">11</span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span class="flex items-baseline">
                    Wed{' '}
                    <span class="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                      12
                    </span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Thu <span class="items-center justify-center font-semibold text-gray-900">13</span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Fri <span class="items-center justify-center font-semibold text-gray-900">14</span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Sat <span class="items-center justify-center font-semibold text-gray-900">15</span>
                  </span>
                </div>
                <div class="flex items-center justify-center py-3">
                  <span>
                    Sun <span class="items-center justify-center font-semibold text-gray-900">16</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-auto">
              <div class="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100"></div>
              <div class="grid flex-auto grid-cols-1 grid-rows-1">
                {/* Horizontal lines -->
          <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100" style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
            <div class="row-end-1 h-7"></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11AM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10PM</div>
            </div>
            <div></div>
            <div>
              <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11PM</div>
            </div>
            <div></div>
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