const express = require('express')
const router = express.Router();
const logueadoOwner = require('../middlewares/logueadoOwner')
const noLogueadoPlayer = require('../middlewares/noLogueadoPlayer')
const logueadoPlayer = require('../middlewares/logueadoPlayer');

// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')


// LOGIN

router.get('/loginPlayer', userPlayerController.loginPlayer);
router.post('/loginPlayer', userPlayerController.processLoginPlayer);
router.get('/logoutPlayer', userPlayerController.logout);

// JUGADOR

router.get('/',noLogueadoPlayer,  logueadoOwner,userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id', logueadoOwner, noLogueadoPlayer, userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador', logueadoOwner,  userPlayerController.perfilDeJugador);

router.get('/carrito', userPlayerController.carrito);

router.get('/reservarCancha', userPlayerController.reservarCancha);

router.get('/vistaCanchaInfo/:id',  noLogueadoPlayer, logueadoOwner, userPlayerController.vistaCanchaInfo);
router.post('/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/elegirCancha', logueadoOwner, userPlayerController.elegirCancha);

router.get('/equipo',noLogueadoPlayer, logueadoOwner, userPlayerController.equipo);

module.exports = router;