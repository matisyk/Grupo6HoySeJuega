const express = require('express')
const router = express.Router();
const multer = require('multer');



const homeController = require('../controllers/homeController')

router.get('/', homeController.index);

module.exports = router;