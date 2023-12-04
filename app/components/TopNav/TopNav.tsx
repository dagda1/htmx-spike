import { useRequestContext } from 'hono/jsx-renderer';
import { TopNavDesktop } from './TopNavDesktop';
import { TopNavMobile } from './TopNavMobile';
import { MenuItems } from '../MenuItems/menuItems';
import { assert } from 'assert-ts';

export function TopNav(): JSX.Element {
  const context = useRequestContext();

  const currentUrl = new URL(context.req.url);

  const currentMenuItem = MenuItems.find((m) => currentUrl.pathname.includes(m.href));

  assert(!!currentMenuItem, `no menu item for ${currentUrl.pathname}`);

  return (
    <>
      <nav class="border-b border-gray-200 bg-white">
        <TopNavDesktop currentUrl={currentUrl.pathname} />
        <TopNavMobile currentUrl={currentUrl.pathname} />
      </nav>

      <div class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">{currentMenuItem?.content}</h1>
        </div>
      </div>
    </>
  );
}
