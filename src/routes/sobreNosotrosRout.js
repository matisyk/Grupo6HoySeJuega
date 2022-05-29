const express = require('express')
const router = express.Router();
const multer = require('multer');



const sobreNosotrosController = require('../controllers/sobreNosotrosController')

router.get('/', sobreNosotrosController.sobreNosotros);

module.exports = router;