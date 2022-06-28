const express = require('express')
const router = express.Router();
const { body } = require('express-validator');
const logueadoOwner = require('../middlewares/logueadoOwner');
const logueadoPlayer = require('../middlewares/logueadoPlayer');


// const multer = require('multer');

const validations = [
  body("email").notEmpty().withMessage('Tienes que escribir un email'),
];

const loginController = require('../controllers/loginController')

router.get('/loginCourt', logueadoOwner, loginController.loginCourt);
router.post('/loginCourt', loginController.processLoginOwner);
router.get('/logoutCourt', loginController.logout);

router.get('/loginPlayer', logueadoPlayer, loginController.loginPlayer);
router.post('/loginPlayer', loginController.processLoginPlayer);
router.get('/logoutPlayer', loginController.logout);


module.exports = router;