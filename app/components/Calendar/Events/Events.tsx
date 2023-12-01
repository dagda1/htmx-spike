import { useRequestContext } from 'hono/jsx-renderer';
import { DefaultView } from '~/constants';
import type { CalendarView } from '~/types';
import { ViewSelectorItem } from '../ViewSelector/ViewSelectorItem';

export function Events(): JSX.Element {
  const context = useRequestContext();

  const currentView = (context.req.query('view') ?? DefaultView) as CalendarView;

  console.log(currentView);

  return (
    <>
      <div class="relative ml-6 md:hidden">
        <button
          type="button"
          class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
          id="menu-0-button"
          aria-expanded="false"
          aria-haspopup="true"
          _="on click toggle between .opacity-0 and .opacity-100 on #mobile-view-dropdown"
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
          id="mobile-view-dropdown"
          class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-0-button"
          tabIndex="-1"
        >
          <div class="py-1" role="none">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:border-blue-500 w-full"
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
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:border-blue-500 w-full"
              role="menuitem"
              tabIndex="-1"
              id="menu-0-item-1"
            >
              Go to today
            </a>
          </div>
          <div class="py-1" role="none">
            <ViewSelectorItem view="Week">Week view</ViewSelectorItem>
            <ViewSelectorItem view="Month">Month view</ViewSelectorItem>
          </div>
        </div>
      </div>
    </>
  );
}
