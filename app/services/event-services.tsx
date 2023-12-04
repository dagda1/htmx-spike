import type { CalendarEvent } from '~/types';
import { DateTime } from 'luxon';

const events: CalendarEvent[] = [
  {
    id: 1,
    name: 'Some event',
    startDay: DateTime.now().plus({ weeks: 2, hours: 19, minutes: 30 }).toJSDate(),
    location: 'Some room somewhere',
    startHour: 19,
    startMinute: 30,
    allDay: false,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Another Event',
    startDay: DateTime.now().plus({ weeks: 3, hours: 17, minutes: 30 }).toJSDate(),
    location: 'Somewhere else',
    startHour: 17,
    startMinute: 30,
    allDay: false,
    image:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export class EventService implements EventService {
  async get(): Promise<CalendarEvent[]> {
    return events;
  }
}
