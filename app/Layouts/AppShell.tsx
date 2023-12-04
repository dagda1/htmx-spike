import { DefaultTitle } from '~/constants';
import type { Child } from 'hono/jsx';
import { PageLayout } from './PageLayout';

interface LayoutProps {
  children: Child;
  topNav?: 'visible' | 'hidden';
}

export function AppShell({ topNav, children }: LayoutProps): JSX.Element {
  return (
    <html class="h-full bg-[color:var(--html-bg-color,theme(colors.white))] js-focus-visible">
      <head>
        <title>{DefaultTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <script src="https://unpkg.com/idiomorph/dist/idiomorph-ext.min.js"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="/static/tailwind.css" />
        <meta name="description" content="Developer Events" />
      </head>
      <body class="font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]" hx-boost="true">
        <PageLayout topNav={topNav}>{children}</PageLayout>
      </body>
    </html>
  );
}
