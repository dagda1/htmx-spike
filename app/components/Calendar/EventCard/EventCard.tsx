import type { CalendarEvent } from '~/types';
import { formatTime } from '~/utils/dates';

export interface EventCardProps {
  event: CalendarEvent;
}

function EventCard({ event }: EventCardProps): JSX.Element {
  return (
    <div
      class={`event-card event-${event.color}`}
      hx-get={`/events/${event.id}/edit`}
      hx-target="body"
      hx-swap="beforeend"
    >
      <span class="event-title">{event.name}</span>
      {!event.allDay ? <span class="event-time">{formatTime(event.startHour, event.startMinute)}</span> : null}
    </div>
  );
}

export default EventCard;
