import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  async listAllOrders(req: Request, res: Response) {
    const orders = await this.service.ListAllOrders();
    res.status(200).json(orders);
  }
}