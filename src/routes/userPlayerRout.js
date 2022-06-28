const express = require('express')
const router = express.Router();
const logueadoPlayer = require('../middlewares/logueadoPlayer')
const noLogueadoPlayer = require('../middlewares/noLogueadoPlayer')

// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/',noLogueadoPlayer,logueadoPlayer, userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id',noLogueadoPlayer,logueadoPlayer, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador',noLogueadoPlayer,logueadoPlayer, userPlayerController.perfilDeJugador);

router.get('/carrito',noLogueadoPlayer,logueadoPlayer, userPlayerController.carrito);

router.get('/reservarCancha',noLogueadoPlayer,logueadoPlayer, userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',noLogueadoPlayer,logueadoPlayer, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo',noLogueadoPlayer,logueadoPlayer, userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha',noLogueadoPlayer,logueadoPlayer, userPlayerController.elegirCancha);

router.get('/equipo',noLogueadoPlayer,logueadoPlayer, userPlayerController.equipo);

module.exports = router;