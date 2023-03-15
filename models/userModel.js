const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'user must have an id user'],
  },
  FullName: {
    type: String,
    required: [true, 'user must have a full name'],
    trim: true,
  },
  Email: {
    type: String,
    trim: true,
    unique: true,
  },
  Password: {
    type: String,
    trim: true,
  },
  Photo: {
    type: String,
    trim: true,
  },
  Position: {
    type: String,
    trim: true,
    default: 'Cashier',
  },
  Authority: {
    type: [String],
    default: ['Cashier'],
  },
  CreatedAt: {
    type: Date,
  },
  UpdatedAt: {
    type: Date,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
