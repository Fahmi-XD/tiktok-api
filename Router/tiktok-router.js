const express = require('express');
const router = express.Router();

const tiktokController = require('../Controller/tiktok-controller');

router.post('/', tiktokController.postTiktok);
router.get('/download', tiktokController.dlTiktok);

module.exports = router;
