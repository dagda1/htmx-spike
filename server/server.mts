import express from 'express';
import path from 'path';
import type { RequestHandler } from 'express';
import { fileURLToPath } from 'node:url';

import cors from 'cors';

export const noCache: () => RequestHandler = () => (_, res, next) => {
  res.set('Pragma', 'no-cache');
  res.set('Cache-Control', 'no-cache, no-store');
  next();
};

export const createCors = (): RequestHandler =>
  cors({
    origin: (origin, cb) => {
      if (typeof origin === 'string') {
        return cb(null, [origin]);
      }

      cb(null, '*');
    },
    credentials: true,
  });

const PORT = process.env.PORT ?? 4800;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicDir = path.join(__dirname, 'views', 'public');

// const root = path.join(process.cwd(), 'server');

async function createServer() {
  const app = express();

  // const api = express.Router();

  // const vite = await (
  //   await import('vite')
  // ).createServer({
  //   root,
  //   logLevel: 'info',
  //   server: {
  //     middlewareMode: true,
  //     watch: {
  //       usePolling: true,
  //       interval: 10,
  //     },
  //   },
  //   appType: 'custom',
  // });

  app.use(createCors());
  app.use(noCache());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(publicDir));
  // app.use(vite.middlewares);

  app.use((req, _res, next) => {
    console.log(req.url);
    next();
  });

  app.get('/ping', (_req, res) => {
    res.send({ pong: true });
  });

  app.post('/testers', (_req, res) => {
    console.log('in tests');
    res.status(200).send('<div>ahoy</div>');
  });

  app.get('/', (_req, res) => {
    res.send('hello');
  });

  app.use((req, res) => {
    console.log(`not found`);
    console.log(req.url);
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>');
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

await createServer();
