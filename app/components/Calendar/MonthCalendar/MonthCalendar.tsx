import type { CalendarProps } from '~/types';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { DaysOfTheWeek } from './DaysOfTheWeek';
import { DaysInMonth } from './DaysInMonth';

export function MonthCalendar({ startDate, events, currentView }: CalendarProps): JSX.Element {
  console.log({ startDate, events });

  return (
    <div class="lg:flex lg:h-full lg:flex-col" id="calendar">
      <CalendarHeader startDate={startDate} />
      <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <DaysOfTheWeek />
        </div>
        <DaysInMonth startDate={startDate} currentView={currentView} />
      </div>
      <div class="px-4 py-10 sm:px-6 lg:hidden">
        <ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
          <li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
            <div class="flex-auto">
              <p class="font-semibold text-gray-900">Maple syrup museum</p>
              <time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
                <svg class="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                3PM
              </time>
            </div>
            <a
              href="#"
              class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
            >
              Edit<span class="sr-only">, Maple syrup museum</span>
            </a>
          </li>
          <li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
            <div class="flex-auto">
              <p class="font-semibold text-gray-900">Hockey game</p>
              <time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
                <svg class="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                7PM
              </time>
            </div>
            <a
              href="#"
              class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
            >
              Edit<span class="sr-only">, Hockey game</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
