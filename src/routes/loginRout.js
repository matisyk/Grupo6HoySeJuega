const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
// const multer = require('multer');



const loginController = require('../controllers/loginController')

router.get('/loginCourt', loginController.loginCourt);
router.post('/loginCourt',[check('email').isEmail().withMessage('Este email no es valido')], loginController.processLogin);
router.get('/loginPlayer', loginController.loginPlayer);

module.exports = router;