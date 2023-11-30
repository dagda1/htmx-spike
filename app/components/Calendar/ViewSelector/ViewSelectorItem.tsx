import type { Child } from 'hono/jsx';
import type { CalendarView } from '~/types';
import { useRequestContext } from 'hono/jsx-renderer';

interface ViewSelectorItemProps {
  children: Child;
  view: CalendarView;
}

const ViewSearchKey = 'view';

export function ViewSelectorItem({ children, view }: ViewSelectorItemProps): JSX.Element {
  const context = useRequestContext();

  const url = new URL(context.req.url);

  const searchParams = new URLSearchParams(url.search);

  searchParams.delete(ViewSearchKey);

  searchParams.set(ViewSearchKey, view);

  const relativeUrl = `${url.pathname}?${searchParams.toString()}`;

  return (
    <a
      href={`${relativeUrl}`}
      class="text-gray-700 block px-4 py-2 text-sm transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-blue-500"
      role="menuitem"
      tabIndex="-1"
    >
      {children}
    </a>
  );
}
