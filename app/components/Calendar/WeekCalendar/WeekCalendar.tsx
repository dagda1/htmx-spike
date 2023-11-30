// import WeekNavigation from '~/components/Calendar/WeekNavigation';
import DayCalendar from '~/components/Calendar/DayCalendar/DayCalendar';
import { mapRange } from '~/utils/arrays';
import { isToday } from '~/utils/dates';
import { DateTime } from 'luxon';
import { DefaultDateFormat } from '~/constants';
import { formatHour } from '~/utils/dates';
import cs from 'classnames';
import type { CalendarProps } from '~/types';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';

function WeekCalendar({ startDate, events }: CalendarProps): JSX.Element {
  const start = DateTime.fromJSDate(startDate);

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
        <CalendarHeader startDate={startDate} />
        <div class="isolate flex flex-auto flex-col overflow-auto bg-white">
          <div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
            <div class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
              <div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                {mapRange(7, (dayOffset) => {
                  const day = start.plus({ days: dayOffset });

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
