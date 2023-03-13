const express = require('express');
const {
  getAllCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  getCartStats,
} = require('../controllers/cartController');

const router = express.Router();

router.route('/stats/:id').get(getCartStats);

router.route('/').get(getAllCartItem).post(createCartItem);

router.route('/:id').patch(updateCartItem).delete(deleteCartItem);

module.exports = router;
