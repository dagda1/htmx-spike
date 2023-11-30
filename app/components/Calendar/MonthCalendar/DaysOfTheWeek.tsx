import { DateTime } from 'luxon';

function getShortWeekdays() {
  const weekdays: string[][] = [];
  for (let i = 1; i <= 7; i++) {
    // Luxon uses 1 for Monday, 2 for Tuesday, etc.
    const day = DateTime.local().set({ weekday: i }).toFormat('ccc');

    weekdays.push([day.substring(0, 1), day.substring(1)]); // 'ccc' formats the day to 'Mon', 'Tue', etc.
  }

  return weekdays;
}

export function DaysOfTheWeek(): JSX.Element {
  const daysOfTheWeek = getShortWeekdays();

  return (
    <>
      {daysOfTheWeek.map((d) => (
        <div class="flex justify-center bg-white py-2">
          <span>{d[0]}</span>
          <span class="sr-only sm:not-sr-only">{d[1]}</span>
        </div>
      ))}
    </>
  );
}
