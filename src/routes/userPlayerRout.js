const express = require('express')
const router = express.Router();
const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/', userPlayerController.vistaJugador);

router.get('/perfilDeJugador', userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador', userPlayerController.perfilDeJugador);

router.get('/carrito', userPlayerController.shiping);

router.get('/reservarCancha', userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha', userPlayerController.elegirCancha);

router.get('/equipo', userPlayerController.equipo);

module.exports = router;