import { jsxRenderer } from 'hono/jsx-renderer';

// We need this so to set the RequestContext and be enable useRequestContext
export const renderer = jsxRenderer(({ children }) => {
  return <>{children}</>;
});
