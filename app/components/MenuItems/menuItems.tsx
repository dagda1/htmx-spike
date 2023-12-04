import type { Child } from 'hono/jsx';
import { ConnectIcon } from './icons/ConnectIcon';
import { StandardsIcon } from './icons/StandardsIcon';
import { FeedbackIcon } from './icons/FeedbackIcon';
import { ContactIcon } from './icons/ContactIcon';

interface MenuItem {
  content: Child;
  href: string;
  icon: Child;
  description: string;
}
export const MenuItems: MenuItem[] = [
  {
    href: '/connect',
    content: 'Code and Connect Events',
    icon: <ConnectIcon />,
    description: 'description of events',
  },
  {
    href: '#',
    content: 'Principle and Standards',
    description: 'description of principle and standards',
    icon: <StandardsIcon />,
  },
  {
    href: '#',
    content: 'Polls and Feedback',
    description: 'description of polls and feedback',
    icon: <FeedbackIcon />,
  },
  { href: '#', content: 'Contact', description: 'description of contact', icon: <ContactIcon /> },
];
