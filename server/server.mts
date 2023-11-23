import express from 'express';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT ?? 4800;

const root = path.join(process.cwd(), 'server');

async function createServer() {
  const app = express();

  const vite = await (
    await import('vite')
  ).createServer({
    root,
    logLevel: 'info',
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 10,
      },
    },
    appType: 'custom',
  });

  app.use(cors());
  app.use(express.json());
  app.use(vite.middlewares);

  app.get('/ping', (_req, res) => {
    res.send({ pong: true });
  });

  app.post('/test', (_, res) => {
    res.send({ result: 'ok' });
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

await createServer();
