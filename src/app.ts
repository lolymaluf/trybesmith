import express from 'express';
import OrderRouter from './routes/OrderRoute';
import ProductRouter from './routes/ProductRoutes';
import UserRouter from './routes/UserRoutes';

const app = express();

app.use(express.json());

app.use(ProductRouter);
app.use(UserRouter);
app.use(OrderRouter);

export default app;
