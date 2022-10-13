import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const ProductRouter = Router();

const productController = new ProductController();

ProductRouter.post('/products', (req, res) => productController.registerProducts(req, res));
ProductRouter.get('/products', (req, res) => productController.listAllProducts(req, res));

export default ProductRouter;