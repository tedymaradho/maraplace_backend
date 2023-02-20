const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  idproduct: {
    type: String,
    required: [true, 'goods must have an id goods'],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'goods must have a name'],
    unique: true,
    trim: true,
  },
  merk: {
    type: String,
    trim: true,
  },
  variant: {
    type: String,
    trim: true,
  },
  color: [String],
  size: [String],
  barcode: {
    type: String,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'goods must have a category'],
  },
  price: {
    type: Number,
    required: [true, 'goods must have a price'],
  },
  quantity: {
    type: Number,
    required: [true, 'goods must have a quantity'],
    default: 0,
  },
  vendor: [String],
  unit: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  sold: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
