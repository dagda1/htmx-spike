import type { Context } from 'hono';

export type CalendarEvent = {
  id: number;
  name: string;
  startDay: Date;
  startHour: number;
  startMinute: number;
  duration: number;
  allDay: boolean;
  color: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CalendarEventChanges = Omit<CalendarEvent, 'id' | 'createdAt' | 'updatedAt'>;

export type CalendarView = 'week' | 'month' | 'events';

export type HandlerContext = Context<{ Variables: ContextVars }>;

// TODO: flesh out when we have an API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextVars = any;

export interface CalendarProps {
  startDate: Date;
  events: CalendarEvent[];
  currentView: CalendarView;
}
