import type { Child } from 'hono/jsx';
import { Container } from '~/components/Container/Container';
import { TopNav } from '~/components/TopNav/TopNav';

interface PageLayoutProps {
  children: Child;
  topNav?: 'visible' | 'hidden';
}
export function PageLayout({ topNav = 'visible', children }: PageLayoutProps): JSX.Element {
  return (
    <div class="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 h-full">
      {topNav === 'visible' && (
        <header>
          <Container>
            <TopNav />
          </Container>
        </header>
      )}
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
