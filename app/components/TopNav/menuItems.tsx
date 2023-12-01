import type { Child } from 'hono/jsx';

interface MenuItem {
  content: Child;
  href: string;
}
export const MenuItems: MenuItem[] = [
  { href: '/events', content: 'Code and Connect Events' },
  { href: '#', content: 'Principle and Standards' },
  { href: '#', content: 'Polls and Feedback' },
  { href: '#', content: 'Contact' },
];
