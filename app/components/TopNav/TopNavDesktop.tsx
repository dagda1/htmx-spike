import { useRequestContext } from 'hono/jsx-renderer';
import { MenuItems } from '../MenuItems/menuItems';
import cs from 'classnames';
import { MobileMenuButton } from './MobileMenuButton';

export function TopNavDesktop(): JSX.Element {
  const context = useRequestContext();

  const currentUrl = new URL(context.req.url);

  return (
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {MenuItems.map((m) => {
              const selected = currentUrl.pathname.includes(m.href);
              return (
                <a
                  href={m.href}
                  class={cs('inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium', {
                    ['border-indigo-500 text-gray-900']: selected,
                    ['border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']: !selected,
                  })}
                  aria-current="page"
                >
                  {m.content}
                </a>
              );
            })}
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          {/* Profile dropdown */}
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Create PR</span>
                <img class="h-8 w-8 rounded-full" src="/static/github.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
}
