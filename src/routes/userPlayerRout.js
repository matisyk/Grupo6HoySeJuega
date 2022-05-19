const express = require('express')
const router = express.Router();


const userPlayerController = require('../controllers/userPlayerController')

router.get('/', userPlayerController.vistaJugador);

router.get('/profilePlayer', userPlayerController.perfilDeJugador);

router.get('/shiping', userPlayerController.shiping);

router.get('/reserveCourt', userPlayerController.reservarCancha);

router.get('/courtView', userPlayerController.vistaCanchaInfo);

router.get('/chooseCourt', userPlayerController.elegirCancha);

router.get('/team', userPlayerController.equipo);

module.exports = router;