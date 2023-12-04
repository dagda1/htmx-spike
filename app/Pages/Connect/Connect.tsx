export function Connect(): JSX.Element {
  return (
    <div id="calendar">
      <div class="py-8 bg-gray-100">
        <h2 class="text-base font-semibold leading-6 text-gray-900 text-center text-h2 mb-10">Upcoming Events</h2>
        <div
          id="events"
          class="mx-auto max-w-5xl mx-2 md:mx-5 lg:mx-12"
          hx-get={`/events`}
          hx-swap="innerHTML"
          hx-trigger="load"
        ></div>
      </div>
      <div class="py-8 bg-gray-100">
        <h2 class="text-base font-semibold leading-6 text-gray-900 text-center text-h2 mb-10">Previous Events</h2>
        <div
          id="events"
          class="mx-auto max-w-5xl mx-2 md:mx-5 lg:mx-12"
          hx-get={`/events`}
          hx-swap="innerHTML"
          hx-trigger="load"
        ></div>
      </div>
    </div>
  );
}
