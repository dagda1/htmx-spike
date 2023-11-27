import { html } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import '@app/styles/tailwind.css';

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>htmx</title>
      </head>
      <body>
        <div class="p-4">
          <h1 class="text-4xl font-bold mb-4"><a href="/">Form</a></h1>
          ${children}
        </div>
      </body>
    </html>
  `;
});
