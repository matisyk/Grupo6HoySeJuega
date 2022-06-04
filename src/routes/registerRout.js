const express = require('express')
const router = express.Router();
// const multer = require('multer');



const registerController = require('../controllers/registerController')

router.get('/', registerController.register);
router.get('/registerPlayer', registerController.formularioDatosJugador);
// router.get('/registerOwner', registerController.formularioDatosCancha);
router.get('/editOwnerForm', registerController.editOwnerForm);
router.get('/editPlayerForm', registerController.editPlayerForm);

module.exports = router;
