import express from 'express';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
