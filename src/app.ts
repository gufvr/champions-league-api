import express, { Request, Response } from 'express';
import { getPlayer } from './controllers/players-controller';

export default function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/', getPlayer);

  return app;
}
