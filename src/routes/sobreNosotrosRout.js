const express = require('express')
const router = express.Router();


const homeController = require('../controllers/sobreNosotrosController')

router.get('/', sobreNosotrosController.sobreNosotros);

module.exports = router;