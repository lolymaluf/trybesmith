import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/users', (req, res) => userController.registerUser(req, res));

export default UserRouter;