import express from 'express';
import ProductRouter from './routes/ProductRoutes';
import UserRouter from './routes/UserRoutes';

const app = express();

app.use(express.json());

app.use(ProductRouter);
app.use(UserRouter);

export default app;
