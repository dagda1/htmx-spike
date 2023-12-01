import type { Child } from 'hono/jsx';
import { TopNav } from '~/components/TopNav/TopNav';

interface PageLayoutProps {
  children: Child;
}
export function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div class="min-h-full">
      <TopNav />
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
