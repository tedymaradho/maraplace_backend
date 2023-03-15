const User = require('./../models/userModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllUsers = async (req, res) => {
  try {
    const features = new APIFeatures(User, req.query)
      .filter()
      .sort()
      .fieldsLimit()
      .paginate();
    const users = await features.query;

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(202).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(402).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(203).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(403).json({
      status: 'fail',
      message: error.message,
    });
  }
};
