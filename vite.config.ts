import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '~': path.join(__dirname, 'app'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: ['app/**/*.tsx', 'app/**/*.ts'],
  },
  plugins: [
    tsconfigPaths(),
    devServer({
      entry: 'app/server.tsx',
    }),
  ],
});
