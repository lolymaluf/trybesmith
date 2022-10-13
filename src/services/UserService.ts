import { NUser } from '../interfaces';
/* import generateToken from '../middlewares/UserTokenValidation'; */
import connection from '../models/connection';
import UserModel from '../models/UserModel';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async registerUser(user: NUser) {
    const register = await this.model.registerUser(user);
    const mensagem = 'Usuário não Pôde ser criado';
    if (!register) { 
      throw new Error(mensagem); 
    }
    const token = { token: register };
    /* const token = generateToken(user);
    return token; */
    return token;
  }
}