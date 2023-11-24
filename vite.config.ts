import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';

export default defineConfig({
  esbuild: {
    loader: 'tsx',
    include: ['server/**/*.tsx'],
  },
  plugins: [
    devServer({
      entry: 'server/server.tsx',
      exclude: ['src'],
    }),
  ],
});
