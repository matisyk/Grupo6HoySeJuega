const express = require('express')
const router = express.Router();
const noLogueadoOwner = require('../middlewares/noLogueadoOwner');
const logueadoPlayer = require('../middlewares/logueadoPlayer');
const multer = require('multer');
const { body } = require('express-validator');
const path = require('path');


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

//************ VALIDACIONES ************

const validationsCancha = [
  body("identificacion").notEmpty().withMessage('Tienes que escribir un nombre de cancha'),
  body("deporte").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("capacidad").notEmpty().withMessage('Tienes que escribir una capacidad'),
  body("tipocancha").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("valor").notEmpty().withMessage('Tienes que escribir un valor')
];

//************ RUTAS ************

// LOGIN

router.get('/loginCourt', userOwnerController.loginCourt);
router.post('/loginCourt', userOwnerController.processLoginOwner);
router.get('/logoutCourt', userOwnerController.logout);

// DUEÑO DE CANCHA
router.get('/update', productsControllerC.redirect);
router.get('/vistaCancha/:id/agenda',  userOwnerController.agenda);
router.get('/vistaCancha/:id/crearTorneo',  userOwnerController.crearTorneo);
router.get('/vistaCancha/:id/registrarCancha',userOwnerController.registrarCancha);
router.get('/vistaCancha/:id/registrarEscuelita',  userOwnerController.registrarEscuelita);
router.get('/vistaCancha/:id/reservaCancha',  userOwnerController.reservaCancha);
router.get('/vistaCancha/:id',  userOwnerController.vistaCancha);
router.post('/vistaCancha', userOwnerController.vistaCancha);


// CANCHAS

router.get('/vistaCancha/:id/registrarCancha/:id',  productsControllerC.create);
router.post('/vistaCancha/:id/registrarCancha/',  upload.any("img-cancha"), validationsCancha ,productsControllerC.store);
router.get('/vistaCancha/:id/editCourt/:id/',  productsControllerC.edit);
router.patch('/vistaCancha/:id/editCourt/:id/', upload.any(),  productsControllerC.update);
router.delete('/vistaCancha/:id/delete/court/:id',  productsControllerC.destroy);


// TORNEOS

router.get('/vistaCancha/:id/crearTorneo/:id', productsControllerT.create);
router.post('/vistaCancha/:id/crearTorneo', upload.any(), productsControllerT.store);
router.get('/vistaCancha/:id/editTorneo/:id/', productsControllerT.edit);
router.patch('/vistaCancha/:id/editTorneo/:id/', upload.any(), productsControllerT.update);
router.delete('/vistaCancha/:id/delete/torneo/:id', productsControllerT.destroy);


// ESCUELAS

router.get('/vistaCancha/:id/registrarEscuelita/:id', productsControllerS.create);
router.post('/vistaCancha/:id/registrarEscuelita', upload.any(), productsControllerS.store);
router.get('/vistaCancha/:id/editSchool/:id/', productsControllerS.edit);
router.patch('/vistaCancha/:id/editSchool/:id/', upload.any(), productsControllerS.update);
router.delete('/vistaCancha/:id/delete/school/:id', productsControllerS.destroy);

module.exports = router;
