const express = require('express')
const router = express.Router();

const noLogueadoPlayer = require('../middlewares/noLogueadoPlayer')

// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')

router.get('/',noLogueadoPlayer, userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id', noLogueadoPlayer, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador',  userPlayerController.perfilDeJugador);

router.get('/carrito', userPlayerController.carrito);

router.get('/reservarCancha', userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',  noLogueadoPlayer, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha', userPlayerController.elegirCancha);

router.get('/equipo',noLogueadoPlayer, userPlayerController.equipo);

module.exports = router;