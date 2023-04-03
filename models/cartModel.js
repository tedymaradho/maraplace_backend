const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id_product: {
    type: String,
    trim: true,
    required: [true, 'cart must have an Id Product'],
  },
  image_url: {
    type: String,
    trim: true,
  },
  product_name: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  disc: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  qty: {
    type: Number,
    default: 0,
  },
  sub_total: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'cart must have an Email User'],
  },
  note: {
    type: String,
    trim: true,
  },
});

const Cart = new mongoose.model('Cart', cartSchema);

module.exports = Cart;
