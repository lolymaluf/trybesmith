import jwt, { SignOptions } from 'jsonwebtoken';
import { NUser } from '../interfaces';

const jwtConfig: SignOptions = {
  expiresIn: '24h',
  algorithm: 'HS256',
};
const generateToken = (payload: NUser) => jwt.sign({ payload }, 'SECRET', jwtConfig);

export default generateToken;