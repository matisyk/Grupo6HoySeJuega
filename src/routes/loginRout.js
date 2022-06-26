const express = require('express')
const router = express.Router();
const {body} = require('express-validator');

// const multer = require('multer');

const validations = [
  body("email").notEmpty().withMessage('Tienes que escribir un email'),
];

const loginController = require('../controllers/loginController')

router.get('/loginCourt', loginController.loginCourt);
router.post('/loginCourt',validations, loginController.processLogin);
router.get('/loginPlayer', loginController.loginPlayer);

module.exports = router;