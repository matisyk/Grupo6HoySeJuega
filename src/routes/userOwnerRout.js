const express = require('express')
const router = express.Router();
// const multer = require('multer');



const userOwnerController = require('../controllers/userOwnerController')

router.get('/agenda', userOwnerController.agenda);
router.get('/crearTorneo', userOwnerController.crearTorneo);
router.get('/registrarCancha', userOwnerController.registrarCancha);
router.get('/registrarEscuelita', userOwnerController.registrarEscuelita);
router.get('/reservaCancha', userOwnerController.reservaCancha);
router.get('/vistaCancha/:id', userOwnerController.vistaCancha);
router.post('/vistaCancha', userOwnerController.vistaCancha);


module.exports = router;
