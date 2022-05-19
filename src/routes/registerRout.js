const express = require('express')
const router = express.Router();


const registerController = require('../controllers/registerController')

router.get('/registerPlayer', registerController.formularioDatosJugador);
router.get('/registerOwner', registerController.formularioDatosCancha);
router.get('/', registerController.register);

module.exports = router;
