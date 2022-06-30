const express = require('express')
const router = express.Router();
const noLogueadoOwner = require('../middlewares/noLogueadoOwner');
// const multer = require('multer');



const userOwnerController = require('../controllers/userOwnerController')

router.get('/agenda',noLogueadoOwner, userOwnerController.agenda);
router.get('/crearTorneo',noLogueadoOwner, userOwnerController.crearTorneo);
router.get('/registrarCancha',noLogueadoOwner, userOwnerController.registrarCancha);
router.get('/registrarEscuelita',noLogueadoOwner, userOwnerController.registrarEscuelita);
router.get('/reservaCancha',noLogueadoOwner, userOwnerController.reservaCancha);
router.get('/vistaCancha/:id',   userOwnerController.vistaCancha);
router.get('/vistaCancha/:id', noLogueadoOwner,  userOwnerController.canchas);
router.post('/vistaCancha', userOwnerController.vistaCancha);


module.exports = router;
