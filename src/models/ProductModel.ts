import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connect: Pool) {
    this.connection = connect;
  }

  async registerProducts(product: NProduct) {
    const { name, amount } = product;
    const [register] = await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: register.insertId, name, amount };
  }
}