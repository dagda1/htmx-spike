import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  esbuild: {
    loader: 'tsx',
    include: ['server/**/*.tsx'],
  },
  plugins: [
    tsconfigPaths(),
    devServer({
      entry: 'server/server.tsx',
      exclude: ['src'],
    }),
  ],
});
