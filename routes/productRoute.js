const express = require('express');
const productController = require('./../controllers/productController');

const router = express.Router();

router.route('/count').get(productController.countProduct);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
