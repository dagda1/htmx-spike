import type { CalendarView } from '~/types';
import { ViewSelectorItem } from './ViewSelectorItem';
import { useRequestContext } from 'hono/jsx-renderer';
import { DefaultView } from '~/constants';

export function ViewSelector(): JSX.Element {
  const context = useRequestContext();

  const currentView = (context.req.query('view') ?? DefaultView) as CalendarView;

  return (
    <div class="relative">
      <button
        type="button"
        class="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        _="on click toggle between .opacity-0 and .opacity-100 on #view-dropdown"
      >
        {currentView} view
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        id="view-dropdown"
        class="absolute right-0 z-10 mt-1 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 transition duration-300 ease-in-out"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div class="py-1" role="none">
          {/* <ViewSelectorItem>Day View</ViewSelectorItem> */}
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
          <ViewSelectorItem view="Week">Week view</ViewSelectorItem>
          <ViewSelectorItem view="Month">Month view</ViewSelectorItem>
          {/* <ViewSelectorItem>Year view</ViewSelectorItem> */}
        </div>
      </div>
    </div>
  );
}
