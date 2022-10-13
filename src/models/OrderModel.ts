import { Pool, RowDataPacket } from 'mysql2/promise';
import { NOrder } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connect: Pool) {
    this.connection = connect;
  }

  async listAllOrders(): Promise<NOrder[]> {
    const [orders] = await this
      .connection
      .execute<NOrder[] & RowDataPacket[]>(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
        FROM Trybesmith.Orders as orders
        INNER JOIN Trybesmith.Products as products
        ON orders.id = products.orderId
        GROUP BY orders.id
        ORDER BY orders.userId;`,
    );
    return orders;
  }
}
