const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  Password: {
    type: String,
    trim: true,
    select: false,
  },
  Address: {
    type: String,
    trim: true,
  },
  Phone: {
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

userSchema.pre('save', async function (next) {
  if (!this.isModified('Password')) return next();

  this.Password = await bcrypt.hash(this.Password, 12);

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
