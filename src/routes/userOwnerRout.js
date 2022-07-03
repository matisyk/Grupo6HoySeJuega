const express = require('express')
const router = express.Router();
const noLogueadoOwner = require('../middlewares/noLogueadoOwner');
const logueadoPlayer = require('../middlewares/logueadoPlayer')
const multer = require('multer')
const path = require('path')


// ************ REQUERIMIENTO DE CONTROLADORES  ************

const userOwnerController = require('../controllers/userOwnerController')
const productsControllerC = require('../controllers/productsCourtController');
const productsControllerS = require('../controllers/productsSchoolController');
const productsControllerT = require('../controllers/productsTorneoController');

// ************ MULTER ************

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'public/img/products')
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)

    // const name = file.originalname
    // cb(null, name)

  }

})

const upload = multer({
  storage: storage
})

//************ RUTAS ************

// DUEÑO DE CANCHA
router.get('/vistaCancha/:id/agenda', logueadoPlayer, userOwnerController.agenda);
router.get('/vistaCancha/:id/crearTorneo', noLogueadoOwner, logueadoPlayer, userOwnerController.crearTorneo);
router.get('/vistaCancha/:id/registrarCancha',logueadoPlayer,userOwnerController.registrarCancha);
router.get('/vistaCancha/:id/registrarEscuelita', logueadoPlayer, userOwnerController.registrarEscuelita);
router.get('/vistaCancha/:id/reservaCancha', logueadoPlayer, userOwnerController.reservaCancha);
router.get('/vistaCancha/:id', logueadoPlayer, userOwnerController.vistaCancha);
router.get('/vistaCancha/:id', noLogueadoOwner, logueadoPlayer, userOwnerController.canchas);
router.post('/vistaCancha', userOwnerController.vistaCancha);


// CANCHAS

router.get('/vistaCancha/:id/registrarCancha', logueadoPlayer, productsControllerC.create);
router.post('/vistaCancha/:id/registrarCancha', logueadoPlayer, upload.any("img-cancha"), productsControllerC.store);
router.get('/vistaCancha/:id/editCourt/:id/', logueadoPlayer, productsControllerC.edit);
router.patch('/vistaCancha/:id/editCourt/:id/', upload.any(), logueadoPlayer, productsControllerC.update);
router.delete('/vistaCancha/:id/delete/court/:id', logueadoPlayer, productsControllerC.destroy);


// TORNEOS

router.get('/vistaCancha/:id/crearTorneo',logueadoPlayer, productsControllerT.create);
router.post('/vistaCancha/:id/crearTorneo',logueadoPlayer, upload.any(), productsControllerT.store);
router.get('/vistaCancha/:id/editTorneo/:id/',logueadoPlayer, productsControllerT.edit);
router.patch('/vistaCancha/:id/editTorneo/:id/', logueadoPlayer,upload.any(), productsControllerT.update);
// /*** DELETE ONE PRODUCT***/ 
//router.delete('/delete/torneo/:id', productsController.destroy); 


// ESCUELAS

router.get('/registrarEscuelita', productsControllerS.create);
router.post('/registrarEscuelita', upload.any(), productsControllerS.store);
router.get('/editSchool/:id/', productsControllerS.edit);
router.patch('/editSchool/:id/', upload.any(), productsControllerS.update);
router.delete('/delete/school/:id', productsControllerS.destroy);

module.exports = router;
