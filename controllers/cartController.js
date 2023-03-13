const Cart = require('../models/cartModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllCartItem = async (req, res) => {
  try {
    const features = new APIFeatures(Cart, req.query).filter().fieldsLimit();

    const cartItems = await features.query;

    res.status(200).json({
      status: 'success',
      results: cartItems.length,
      data: {
        cartItems,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        cartItem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        cartItem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.getCartStats = async (req, res) => {
  try {
    const stats = await Cart.aggregate([
      {
        $match: { IdUser: req.params.id },
      },
      {
        $group: {
          _id: '$IdUser',
          sumQty: { $sum: '$Qty' },
          sumSubTotal: { $sum: '$SubTotal' },
        },
      },
    ]);

    res.status(200).json({
      status: 'success',
      data: stats,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
