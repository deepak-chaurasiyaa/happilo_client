import Router from 'express-promise-router';

import { productController } from '../controllers/index.js';

const router = Router();

router.post('/', productController.createProduct);

router.get('/list', productController.listAllProducts);

router.get('/:id', productController.findProductById);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);

export default router;
