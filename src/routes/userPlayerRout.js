const express = require('express')
const router = express.Router();



// const multer = require('multer');



const userPlayerController = require('../controllers/userPlayerController')


// LOGIN

router.get('/loginPlayer', userPlayerController.loginPlayer);
router.post('/loginPlayer', userPlayerController.processLoginPlayer);
router.get('/logoutPlayer', userPlayerController.logout);

// JUGADOR

router.get('/', userPlayerController.vistaJugador);

router.get('/perfilDeJugador/:id',  userPlayerController.perfilDeJugador);
router.post('/perfilDeJugador',  userPlayerController.perfilDeJugador);

router.get('/perfilDeJugador/:id/carrito/', userPlayerController.carrito);

router.get('/perfilDeJugador/:id/reservarCancha', userPlayerController.reservarCancha);

router.get('/perfilDeJugador/:id/vistaCanchaInfo/',  userPlayerController.vistaCanchaInfo);
router.post('/perfilDeJugador/:id/vistaCanchaInfo', userPlayerController.vistaCanchaInfo);

router.get('/perfilDeJugador/:id/elegirCancha',userPlayerController.elegirCancha);

router.get('/perfilDeJugador/:id/equipo', userPlayerController.equipo);
router.get('/buscarJugador', userPlayerController.buscarJugador);

module.exports = router;