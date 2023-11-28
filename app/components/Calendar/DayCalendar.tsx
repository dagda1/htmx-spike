import type { CalendarEvent } from '@/components/Calendar/models/event';
import EventCard from '@/components/Calendar/EventCard';
import { mapRange } from '@/utils/arrays';
import { isWeekend } from '@/utils/dates';

export interface DayCalendarProps {
  startDate: Date;
  events: CalendarEvent[];
}

function DayCalendar({ startDate, events }: DayCalendarProps): JSX.Element {
  const cellClass = isWeekend(startDate) ? 'hour-cell weekend-cell' : 'hour-cell';

  const allDayEvents = events.filter((e) => e.allDay);

  console.log({ startDate });

  return (
    <div class="hour-grid">
      <div class={`${cellClass} all-day-cell`}>
        {allDayEvents.map((e) => (
          <EventCard event={e} />
        ))}
      </div>
      {mapRange(24, (hour) => {
        const hourEvents = events.filter((e) => !e.allDay && e.startHour === hour);
        return (
          <div class={cellClass}>
            {hourEvents.map((e) => (
              <EventCard event={e} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default DayCalendar;
