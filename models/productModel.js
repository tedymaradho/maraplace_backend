const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id_product: {
    type: String,
    unique: true,
    required: [true, 'Product must have an id product'],
    trim: true,
  },
  product_name: {
    type: String,
    unique: true,
    required: [true, 'Product must have a name'],
    trim: true,
  },
  merk: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Product must have a category'],
  },
  price: {
    type: Number,
    required: [true, 'Product must have a price'],
  },
  disc: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: [true, 'Product must have a stock'],
    default: 0,
  },
  uom_name: {
    type: String,
    trim: true,
  },
  barcode: {
    type: String,
    trim: true,
  },
  images: {
    type: [String],
    trim: true,
  },
  vendor: [String],
  sold: {
    type: Number,
    default: 0,
  },
  flag: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
    default: 'active',
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
