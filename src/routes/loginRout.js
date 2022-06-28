const express = require('express')
const router = express.Router();
const { body } = require('express-validator');
const logueadoOwner = require('../middlewares/logeadoOwner')


// const multer = require('multer');

const validations = [
  body("email").notEmpty().withMessage('Tienes que escribir un email'),
];

const loginController = require('../controllers/loginController')

router.get('/loginCourt', logueadoOwner, loginController.loginCourt);
router.post('/loginCourt', loginController.processLogin);
router.get('/logoutCourt', loginController.logout);

router.get('/loginPlayer', logueadoOwner, loginController.loginPlayer);


module.exports = router;