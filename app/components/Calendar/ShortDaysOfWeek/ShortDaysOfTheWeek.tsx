import { getShortWeekdays } from '~/utils/dates';

interface ShortDaysOfTheWeekProps {
  className?: string;
}

export function ShortDaysOfTheWeek({ className }: ShortDaysOfTheWeekProps): JSX.Element {
  const daysOfTheWeek = getShortWeekdays();

  return (
    <>
      {daysOfTheWeek.map((d) => (
        <div>
          <span>{d[0]}</span>
          <span class={className}>{d[1]}</span>
        </div>
      ))}
    </>
  );
}
