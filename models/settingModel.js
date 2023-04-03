const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  id_setting: {
    type: String,
    required: [true, 'Setting must have an ID'],
    unique: true,
    trim: true,
  },
  set_name: {
    type: String,
    trim: true,
  },
  set_1: {
    type: [String],
    trim: true,
  },
  set_2: {
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

const Setting = mongoose.model('Setting', settingSchema);
module.exports = Setting;
