import { DefaultTitle } from '@/constants';
import type { Child } from 'hono/jsx';
import { PageLayout } from './PageLayout';

interface LayoutProps {
  children: Child;
}

export function AppShell({ children }: LayoutProps): JSX.Element {
  return (
    <html class="h-full">
      <head>
        <title>{DefaultTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="/static/tailwind.css" />
        <meta name="description" content="Developer Events" />
      </head>
      <body class="h-full">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
