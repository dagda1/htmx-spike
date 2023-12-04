import { TopNavDesktop } from './TopNavDesktop';
import { TopNavMobile } from './TopNavMobile';

export function TopNav(): JSX.Element {
  return (
    <>
      <nav class="border-b border-gray-200 bg-white">
        <TopNavDesktop />
        <TopNavMobile />
        {/* Mobile menu, show/hide based on menu state. */}
      </nav>

      <div class="py-10">
        <header>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
