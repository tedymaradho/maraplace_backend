const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  IdSetting: {
    type: String,
    required: [true, 'Setting must have an ID'],
    unique: true,
    trim: true,
  },
  SetName: {
    type: String,
    trim: true,
  },
  Set1: {
    type: [String],
    trim: true,
  },
  Set2: {
    type: String,
    trim: true,
  },
  CreatedAt: {
    type: Date,
  },
  UpdatedAt: {
    type: Date,
  },
});

const Setting = mongoose.model('Setting', settingSchema);
module.exports = Setting;
