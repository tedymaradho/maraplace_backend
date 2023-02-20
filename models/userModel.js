const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    default: 'password',
  },
  position: {
    type: String,
    required: true,
    trim: true,
    default: 'Cashier',
  },
  authority: {
    type: [String],
    required: true,
    default: ['Cashier'],
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
