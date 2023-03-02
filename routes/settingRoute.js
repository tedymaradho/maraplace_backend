const settingController = require('../controllers/settingController');
const express = require('express');

const router = express.Router();

router.route('/').get(settingController.getAllSettings);

router.route('/:id').post(settingController.createSetting);

module.exports = router;
