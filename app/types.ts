import type { Context } from 'hono';

export type HandlerContext = Context<{ Variables: ContextVars }>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextVars = any;
