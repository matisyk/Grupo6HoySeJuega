const express = require('express')
const router = express.Router();
const logueadoOwner = require('../middlewares/logueadoOwner');
const noLogueadoOwner = require('../middlewares/nologueadoOwner');
// const multer = require('multer');



const userOwnerController = require('../controllers/userOwnerController')

router.get('/agenda',noLogueadoOwner,logueadoOwner, userOwnerController.agenda);
router.get('/crearTorneo',noLogueadoOwner,logueadoOwner, userOwnerController.crearTorneo);
router.get('/registrarCancha',noLogueadoOwner,logueadoOwner, userOwnerController.registrarCancha);
router.get('/registrarEscuelita',noLogueadoOwner,logueadoOwner, userOwnerController.registrarEscuelita);
router.get('/reservaCancha',noLogueadoOwner,logueadoOwner, userOwnerController.reservaCancha);
router.get('/vistaCancha/:id',noLogueadoOwner,logueadoOwner, userOwnerController.vistaCancha);
router.get('/vistaCancha/:id',noLogueadoOwner,logueadoOwner, userOwnerController.canchas);
router.post('/vistaCancha',noLogueadoOwner,logueadoOwner, userOwnerController.vistaCancha);


module.exports = router;
