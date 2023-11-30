import type { Child } from 'hono/jsx';
import type { CalendarView } from '~/types';

interface ViewSelectorItemProps {
  children: Child;
  view: CalendarView;
}
export function ViewSelectorItem({ children, view }: ViewSelectorItemProps): JSX.Element {
  return (
    <a
      href="#"
      class="text-gray-700 block px-4 py-2 text-sm transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-blue-500"
      role="menuitem"
      tabIndex="-1"
    >
      {children}
    </a>
  );
}
