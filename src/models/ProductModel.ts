import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { NProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connect: Pool) {
    this.connection = connect;
  }

  // Nao tem o promise e fica dentro do parametro porque estou recebendo informacoes
  
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

  // Promise pq é assíncrono e esta fora do parametro 

  async listAllProducts(): Promise<NProduct[]> {
    const [products] = await this
      .connection.execute<NProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return products;
  }
}
