const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  IdProduct: {
    type: String,
    unique: true,
    required: [true, 'Product must have an id product'],
    trim: true,
  },
  Name: {
    type: String,
    unique: true,
    required: [true, 'Product must have a name'],
    trim: true,
  },
  Merk: {
    type: String,
    trim: true,
  },
  Desc: {
    type: String,
    trim: true,
  },
  Category: {
    type: String,
    trim: true,
    required: [true, 'Product must have a category'],
  },
  Price: {
    type: Number,
    required: [true, 'Product must have a price'],
  },
  Disc: {
    type: Number,
    default: 0,
  },
  PriceAfterDisc: {
    type: Number,
    default: 0,
  },
  Stock: {
    type: Number,
    required: [true, 'Product must have a stock'],
    default: 0,
  },
  UnitName: {
    type: String,
    trim: true,
  },
  Barcode: {
    type: String,
    trim: true,
  },
  ImageUrl: {
    type: [String],
    trim: true,
  },
  Vendor: [String],
  Sold: {
    type: Number,
    default: 0,
  },
  Flag: {
    type: String,
    trim: true,
  },
  Status: {
    type: String,
    trim: true,
    default: 'active',
  },
  CreatedAt: {
    type: Date,
  },
  UpdatedAt: {
    type: Date,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
