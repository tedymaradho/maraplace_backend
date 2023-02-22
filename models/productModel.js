const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  idProduct: {
    type: String,
    unique: true,
    required: [true, 'Product must have an id product'],
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, 'Product must have a name'],
    trim: true,
  },
  merk: {
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
  priceDisc: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    required: [true, 'goods must have a quantity'],
    default: 0,
  },
  unit: {
    type: String,
    trim: true,
  },
  barcode: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: [String],
    trim: true,
  },
  vendor: [String],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
