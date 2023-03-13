const Setting = require('../models/settingModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllSettings = async (req, res) => {
  try {
    const features = new APIFeatures(Setting, req.query)
      .filter()
      .sort()
      .fieldsLimit()
      .paginate();

    const setting = await features.query;

    res.status(200).json({
      status: 'success',
      results: setting.length,
      data: {
        setting,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createSetting = async (req, res) => {
  try {
    const setting = await Setting.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        setting,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};
