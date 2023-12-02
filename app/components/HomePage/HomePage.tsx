import { MenuItems } from '../MenuItems/menuItems';

export function HomePage(): JSX.Element {
  return (
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8 h-full">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">ELDER</h1>
      </div>
      <div></div>
      <div class="flex justify-center items-center flex-col w-full">
        <img src="https://placehold.co/400x200" alt="placeholder" />
        <div class="-left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            {MenuItems.map((m) => (
              <div class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  {m.icon}
                </div>
                <div class="flex-auto">
                  <a href={m.href} class="block font-semibold text-gray-900">
                    {m.content}
                    <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-gray-600">{m.description}</p>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
}
