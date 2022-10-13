import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NUser } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connect: Pool) {
    this.connection = connect;
  }

  async registerUser(user: NUser) {
    const { username, classe, level, password } = user;
    const register = await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, password, level, classe) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return register;
    /*  return { id: register.insertId, username, classe, level, password }; */
  }
}