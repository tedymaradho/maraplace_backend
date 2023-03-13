const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  IdProduct: {
    type: String,
    trim: true,
    required: [true, 'cart must have an Id Product'],
  },
  ImageUrl: {
    type: String,
    trim: true,
  },
  ProductName: {
    type: String,
    trim: true,
  },
  Price: {
    type: Number,
    default: 0,
  },
  Disc: {
    type: Number,
    default: 0,
  },
  SalePrice: {
    type: Number,
    default: 0,
  },
  Qty: {
    type: Number,
    default: 0,
  },
  SubTotal: {
    type: Number,
    default: 0,
  },
  IdUser: {
    type: String,
    trim: true,
    required: [true, 'cart must have an Id User'],
  },
  Note: {
    type: String,
    trim: true,
  },
});

const Cart = new mongoose.model('Cart', cartSchema);

module.exports = Cart;
