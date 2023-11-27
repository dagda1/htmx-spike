import type { CalendarEvent } from '@/components/Calendar/models/event';
import WeekNavigation from '@/components/Calendar/WeekNavigation';
import DayCalendar from '@/components/Calendar/DayCalendar';
import { mapRange } from '@/utils/arrays';
import { formatHour, isToday } from '@/utils/dates';
import { DateTime } from 'luxon';
import { DefaultDateFormat, LongMonth, LongYear } from '@/constants';

export interface WeekCalendarProps {
  startDate: Date;
  events: CalendarEvent[];
}

function WeekCalendar({ startDate, events }: WeekCalendarProps): JSX.Element {
  const start = DateTime.fromJSDate(startDate);
  const monthName = start.toFormat(LongMonth);
  const year = start.toFormat(LongYear);

  const dateString = start.toFormat(DefaultDateFormat);

  return (
    <div
      id="calendar"
      class="week-calendar"
      hx-get={`/events?date=${dateString}`}
      hx-swap="outerHTML"
      hx-trigger="calendar:eventsChanged from:body"
    >
      <div class="calendar-header">
        <div class="month-year-header">
          <span class="month-label">{monthName}</span>
          <span class="year-label">{year}</span>
          <button id="add-event-btn" class="toolbar-button" hx-get="/events/add" hx-target="body" hx-swap="beforeend">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d={`M 11 5 L 13 5 L 13 11 L 19 11 L 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 Z`}
              />
            </svg>
          </button>
        </div>
        <WeekNavigation
          prevWeek={DateTime.fromJSDate(startDate).plus({ weeks: -1 }).toJSDate()}
          nextWeek={DateTime.fromJSDate(startDate).plus({ weeks: 1 }).toJSDate()}
        />
      </div>
      <div class="day-grid">
        <div class="time-legend-grid">
          <div class="time-legend-cell">
            <label class="time-legend-label all-day-legend">all-day</label>
          </div>
          {mapRange(24, (hour) => {
            return (
              <div class="time-legend-cell">
                <label class="time-legend-label">{formatHour(hour)}</label>
              </div>
            );
          })}
        </div>
        {mapRange(7, (dayOffset) => {
          const day = DateTime.fromJSDate(startDate).plus({ days: dayOffset });
          const dayEvents = events
            .filter((e) => DateTime.fromJSDate(e.startDay).weekday === day.weekday)
            .sort((a, b) => a.startHour + a.startMinute - (b.startHour + b.startMinute));
          return (
            <div class="day-column">
              <div class="day-column-header">
                <span>{day.toFormat('EEE')}</span>
                <span className={isToday(day.toJSDate()) ? 'today-date' : null}>{day.toFormat('d')}</span>
              </div>
              <div class="day-column-content">
                <DayCalendar startDate={day.toJSDate()} events={dayEvents} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeekCalendar;
