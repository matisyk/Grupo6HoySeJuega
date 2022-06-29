const express = require('express')
const router = express.Router();
const logueadoPlayer = require('../middlewares/logueadoPlayer')
const noLogueadoPlayer = require('../middlewares/noLogueadoPlayer')

// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/',noLogueadoPlayer,logueadoPlayer, userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id',logueadoPlayer, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador',logueadoPlayer, userPlayerController.perfilDeJugador);

router.get('/carrito',noLogueadoPlayer,logueadoPlayer, userPlayerController.carrito);

router.get('/reservarCancha',noLogueadoPlayer,logueadoPlayer, userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',logueadoPlayer, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo',logueadoPlayer, userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha',noLogueadoPlayer,logueadoPlayer, userPlayerController.elegirCancha);

router.get('/equipo',noLogueadoPlayer,logueadoPlayer, userPlayerController.equipo);

module.exports = router;