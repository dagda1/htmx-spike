export function Events(): JSX.Element {
  return (
    <>
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
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-0">
              Create event
            </a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-1">
              Go to today
            </a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-2">
              Day view
            </a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-3">
              Week view
            </a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-4">
              Month view
            </a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-5">
              Year view
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
