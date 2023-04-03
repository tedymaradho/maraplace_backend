const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  full_name: {
    type: String,
    required: [true, 'user must have a full name'],
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    select: false,
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
  },
  authority: {
    type: [String],
    trim: true,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

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
