import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const OrderRouter = Router();

const orderController = new OrderController();

OrderRouter.get('/orders', (req, res) => orderController.listAllOrders(req, res));

export default OrderRouter;