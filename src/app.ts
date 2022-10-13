import express from 'express';
import ProductRouter from './routes/ProductRoutes';

const app = express();

app.use(express.json());

app.use(ProductRouter);

export default app;
