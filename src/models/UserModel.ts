import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NUser } from '../interfaces';
import generateToken from '../middlewares/UserTokenValidation';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async registerUser(user: NUser) {
    const { username, classe, level, password } = user;
    await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const token = generateToken(user);
    return token;
    
    /*  return { id: register.insertId, username, classe, level, password }; */
  }
}