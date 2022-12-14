import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async registerProducts(req: Request, res: Response) {
    const product = req.body;
    const register = await this
      .service
      .RegisterProducts(product);
    res.status(201).json(register);
  }

  async listAllProducts(req: Request, res: Response) {
    const products = await this.service.ListAllProducts();
    res.status(200).json(products);
  }
}