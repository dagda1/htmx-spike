import type { Child } from 'hono/jsx';

interface ContainerProps {
  children: Child;
}
export function Container({ children }: ContainerProps): JSX.Element {
  return <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}
