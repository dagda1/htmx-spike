import type { CalendarEvent } from '~/types';
import { Event } from './Event';

interface EventsProps {
  events: CalendarEvent[];
}

export function Events({ events }: EventsProps): JSX.Element {
  return (
    <ol class="divide-y divide-gray-200">
      {events.map((event) => (
        <Event event={event} />
      ))}
    </ol>
  );
}
