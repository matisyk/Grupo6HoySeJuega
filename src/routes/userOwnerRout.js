const express = require('express')
const router = express.Router();
const noLogueadoOwner = require('../middlewares/noLogueadoOwner');
const logueadoPlayer = require('../middlewares/logueadoPlayer')
// const multer = require('multer');



const userOwnerController = require('../controllers/userOwnerController')

router.get('/agenda',logueadoPlayer,userOwnerController.agenda);
router.get('/crearTorneo',noLogueadoOwner,logueadoPlayer, userOwnerController.crearTorneo);
router.get('/registrarCancha',logueadoPlayer,userOwnerController.registrarCancha);
router.get('/registrarEscuelita',logueadoPlayer,userOwnerController.registrarEscuelita);
router.get('/reservaCancha', logueadoPlayer,userOwnerController.reservaCancha);
router.get('/vistaCancha/:id',  logueadoPlayer, userOwnerController.vistaCancha);
router.get('/vistaCancha/:id', noLogueadoOwner, logueadoPlayer, userOwnerController.canchas);
router.post('/vistaCancha', userOwnerController.vistaCancha);


module.exports = router;
