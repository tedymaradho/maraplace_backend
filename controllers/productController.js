const Product = require('./../models/productModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, 'public/img/products/');
  },
  filename: (req, files, cb) => {
    const ext = files.mimetype.split('/')[1];
    cb(null, `product-${req.body.id_product}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: multerStorage });

exports.uploadProductImages = upload.array('images');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product, req.query)
    .filter()
    .sort()
    .fieldsLimit()
    .paginate();

  const products = await features.query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const imageName = req.files.map((file) => file.filename);
  console.log(imageName);

  const product = await Product.create({
    ...req.body,
    images: imageName,
  });

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
