import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async registerUser(req: Request, res: Response) {
    const user = req.body;
    const register = await this
      .service
      .registerUser(user);
    res.status(201).json(register);
  }
}