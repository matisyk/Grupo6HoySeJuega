const express = require('express')
const router = express.Router();


const registerController = require('../controllers/registerController')

router.get('/', registerController.register);
router.get('/registerPlayer', registerController.formularioDatosJugador);
router.get('/registerOwner', registerController.formularioDatosCancha);



module.exports = router;
