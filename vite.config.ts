import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.join(__dirname, 'app'),
      '@server': path.join(__dirname, 'server'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: ['server/**/*.tsx'],
  },
  plugins: [
    tsconfigPaths(),
    devServer({
      entry: 'server/server.tsx',
    }),
  ],
});
