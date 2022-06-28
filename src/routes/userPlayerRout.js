const express = require('express')
const router = express.Router();
const logueadoOwner = require('../middlewares/logeadoOwner')
// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/',logueadoOwner, userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id',logueadoOwner, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador', userPlayerController.perfilDeJugador);

router.get('/carrito',logueadoOwner, userPlayerController.carrito);

router.get('/reservarCancha',logueadoOwner, userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',logueadoOwner, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha',logueadoOwner, userPlayerController.elegirCancha);

router.get('/equipo',logueadoOwner, userPlayerController.equipo);

module.exports = router;