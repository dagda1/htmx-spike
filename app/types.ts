import type { Context } from 'hono';

export type CalendarEvent = {
  id: number;
  name: string;
  startDay: Date;
  duration?: number;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  color?: string;
  startHour: number;
  startMinute: number;
  allDay: boolean;
  image: string;
};

export type CalendarEventChanges = Omit<CalendarEvent, 'id' | 'createdAt' | 'updatedAt'>;

export type CalendarView = 'week' | 'month' | 'events';

export type HandlerContext = Context<{ Variables: ContextVars }>;

// TODO: flesh out when we have an API
export interface EventSerivce {
  get(): Promise<CalendarEvent[]>;
}

export type ContextVars = {
  eventService: EventSerivce;
};

export interface CalendarProps {
  startDate: Date;
  events: CalendarEvent[];
  currentView: CalendarView;
}
