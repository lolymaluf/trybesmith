import { NOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async ListAllOrders(): Promise<NOrder[]> {
    const orders = await this.model.listAllOrders();
    return orders;
  }
}