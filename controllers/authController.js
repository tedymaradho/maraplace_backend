const { promisify } = require('util');
const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ Email }).select('+Password');

  const correct = await user.correctPassword(Password, user.Password);

  if (!user || !correct) {
    return next(new AppError('Incorrect email and password', 401));
  }

  const token = signToken(user._id);

  res.status(201).json({
    status: 'success',
    data: {
      Username: user.Username,
      Email: user.Email,
      FullName: user.FullName,
      token,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('B1sm1ll4h')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  console.log(decode);

  next();
});
