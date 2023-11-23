import inject from '@rollup/plugin-inject';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4400/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', ''),
        headers: {
          
        }
      },
    },
  },
  plugins: [
    inject({
      htmx: 'htmx.org',
    }),
  ],
});
