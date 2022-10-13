import { NProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async RegisterProducts(product: NProduct) {
    const register = await this.model.registerProducts(product);
    return register;
  }

  async ListAllProducts(): Promise<NProduct[]> {
    const products = await this.model.listAllProducts();
    return products;
  }
}