import { useRequestContext } from 'hono/jsx-renderer';
import { MenuItems } from '../MenuItems/menuItems';
import cs from 'classnames';

export function TopNavMobile(): JSX.Element {
  const context = useRequestContext();

  const currentUrl = new URL(context.req.url);

  return (
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        {/* Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" */}
        {MenuItems.map((m) => {
          const selected = currentUrl.pathname.includes(m.href);
          return (
            <a
              href={m.href}
              class={cs('border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800', {
                ['border-indigo-500 bg-indigo-50 text-indigo-700']: selected,
              })}
              aria-current="page"
            >
              {m.content}
            </a>
          );
        })}
      </div>
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
            Your Profile
          </a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
            Settings
          </a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}
