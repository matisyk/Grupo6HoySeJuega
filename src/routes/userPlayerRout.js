const express = require('express')
const router = express.Router();
const logueadoOwner = require('../middlewares/logeadoOwner')
const noLogueadoOwner = require('../middlewares/noLogeadoOwner')

// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/',noLogueadoOwner,logueadoOwner, userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id',noLogueadoOwner,logueadoOwner, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador', userPlayerController.perfilDeJugador);

router.get('/carrito',noLogueadoOwner,logueadoOwner, userPlayerController.carrito);

router.get('/reservarCancha',noLogueadoOwner,logueadoOwner, userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',noLogueadoOwner,logueadoOwner, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha',noLogueadoOwner,logueadoOwner, userPlayerController.elegirCancha);

router.get('/equipo',noLogueadoOwner,logueadoOwner, userPlayerController.equipo);

module.exports = router;