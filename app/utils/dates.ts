import { DateTime } from 'luxon';
import type { CalendarView } from '~/types';

export function formatWithOrdinal(date: Date): string {
  const dt = DateTime.fromJSDate(date);
  const formattedDate = dt.toFormat("MMMM d, yyyy 'at' h:mm a");
  const day = dt.day;
  const ordinal = (day: number) => {
    if (day > 3 && day < 21) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return formattedDate.replace(/d/, day + ordinal(day));
}

export function getShortWeekdays(): string[][] {
  const weekdays: string[][] = [];
  for (let i = 1; i <= 7; i++) {
    // Luxon uses 1 for Monday, 2 for Tuesday, etc.
    const day = DateTime.local().set({ weekday: i }).toFormat('ccc');

    weekdays.push([day.substring(0, 1), day.substring(1)]); // 'ccc' formats the day to 'Mon', 'Tue', etc.
  }

  return weekdays;
}

export function getMonthInWeekBlocks(startDate: Date): DateTime[][] {
  const weeks = [];
  const firstMonday = DateTime.fromJSDate(getFirstMonday(startDate, 'month'));
  const lastMonday = getLast7DaysOfMonth(startDate);

  for (
    let weekStart = firstMonday;
    weekStart <= DateTime.fromISO(lastMonday[0]);
    weekStart = weekStart.plus({ days: 7 })
  ) {
    const week = [];
    for (let day = 0; day < 7; day++) {
      week.push(weekStart.plus({ days: day }));
    }
    weeks.push(week);
  }

  return weeks;
}

export function getFirstMonday(requestedDate: Date, currentView: CalendarView): Date {
  const startDate = DateTime.fromJSDate(requestedDate);

  if (currentView === 'week') {
    startDate.startOf('week').toJSDate();
  }

  const month = startDate.month;
  const year = startDate.year;

  let date = DateTime.local(year, month, 1);

  // Check the weekday of the first day of the month
  // Luxon uses 1 for Monday
  // If the first day is not Monday, adjust the date to the previous Monday
  if (date.weekday !== 1) {
    date = date.minus({ days: (date.weekday + 6) % 7 });
  }

  return date.toJSDate();
}

export function getLast7DaysOfMonth(requestedDate: Date): string[] {
  const date = DateTime.fromJSDate(requestedDate);

  // Find the last day of the month
  const lastDayOfMonth = DateTime.local(date.year, date.month).endOf('month');

  // Calculate the last Monday of the month
  // Luxon uses 1 for Monday, 7 for Sunday
  const daysToLastMonday = (lastDayOfMonth.weekday - 1) % 7;
  const lastMonday = lastDayOfMonth.minus({ days: daysToLastMonday });

  // Get the 7-day period starting from this Monday
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(lastMonday.plus({ days: i }).toISODate() as string);
  }

  return week;
}

export function isToday(date: Date): boolean {
  const startOfToday = DateTime.now().startOf('day');
  const queryDate = DateTime.fromJSDate(date).startOf('day');

  return queryDate.equals(startOfToday);
}

export function isWeekend(date: Date): boolean {
  const dt = DateTime.fromJSDate(date);

  return [6, 7].includes(dt.weekday);
}

export function parseShortDate(dateString: string): Date | undefined {
  if (!dateString) {
    return undefined;
  }

  const regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/i;
  const match = regex.exec(dateString);

  if (!match) {
    return undefined;
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  if (year < 1) {
    return undefined;
  }

  if (month < 1 || month > 12) {
    return undefined;
  }
  if (day < 1 || day > 31) {
    return undefined;
  }

  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

export function formatHour(hour: number): string {
  hour %= 24;

  if (hour === 0) {
    return '12 AM';
  }

  if (hour === 12) {
    return 'Noon';
  }

  if (hour < 12) {
    return `${hour} AM`;
  } else {
    return `${hour - 12} PM`;
  }
}

export function formatTime(hour?: number, minute?: number): string {
  hour = hour ?? 0;
  minute = minute ?? 0;

  const hourString = hour !== 12 ? (hour % 12).toString() : '12';
  const minuteString = minute.toString().padStart(2, '0');
  const amPm = hour < 12 ? 'AM' : 'PM';

  return minute > 0 ? `${hourString}:${minuteString} ${amPm}` : `${hourString} ${amPm}`;
}
