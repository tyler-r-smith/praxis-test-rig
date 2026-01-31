import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.static(join(__dirname, '../public')));

  app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
