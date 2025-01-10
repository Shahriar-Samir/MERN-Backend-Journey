import express from 'express';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import notFound from './middlewares/NotFound';
import router from './app/routes/routes';
const app = express();

app.use(express.json());


app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
