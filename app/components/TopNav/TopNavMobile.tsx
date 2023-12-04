import { MenuItems } from '../MenuItems/menuItems';
import cs from 'classnames';
import type { TopNavProps } from './types';

export function TopNavMobile({ currentUrl }: TopNavProps): JSX.Element {
  return (
    <div id="mobile-menu" class="sm:hidden hidden mobile-menu-target">
      <div class="space-y-1 pb-3 pt-2">
        {/* Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" */}
        {MenuItems.map((m) => {
          const selected = currentUrl.includes(m.href);
          return (
            <a
              href={m.href}
              class={cs(
                'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                {
                  ['border-indigo-500 bg-indigo-50 text-indigo-700 block border-l-4 py-2 pl-3 pr-4 text-base font-medium']:
                    selected,
                },
              )}
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
    </div>
  );
}
