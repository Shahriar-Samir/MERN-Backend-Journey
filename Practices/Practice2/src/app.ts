import express from 'express';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/vua', (req, res) => {
  res.send('Hello World!');
});

app.get('/asholvua', (req, res) => {
  res.send('Hello asholvua!');
});

app.use(globalErrorHandler);
export default app;
