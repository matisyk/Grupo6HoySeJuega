// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');
const { body } = require('express-validator');
//const logueadoPlayer = require('../middlewares/logeadoPlayer')


// ************ Controller Require ************
const productsController = require('../controllers/productsRegisterPlayerController');

// ************ MULTER ************

const storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, 'public/img/jugadores')
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)

    // const name = file.originalname
    // cb(null, name)

  }

})

const upload = multer({ storage: storage });

const validations = [
  body("nombre").notEmpty().withMessage('Tienes que escribir un nombre'),
  body("apellido").notEmpty().withMessage('Tienes que escribir un apellido'),
  body("email").notEmpty().withMessage('Tienes que escribir un email'),
  body("password").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("edad").notEmpty().withMessage('Tienes que escribir una edad'),
  body("telefono").notEmpty().withMessage('Tienes que escribir un telefono'),
  body("categoria").notEmpty().withMessage('Tienes que escribir una posicion'),
  body("autoValoracion").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("deporte1").notEmpty().withMessage('Tienes que seleccionar una opcion'),
  body("deporte2").notEmpty().withMessage('Tienes que seleccionar una opcion')
];


/*** CREATE ONE PRODUCT ***/ 

router.get('/registerPlayer', productsController.create);
router.post('/registerPlayer', upload.any("img-cancha"), validations, productsController.store);


/*** REDIRECT ***/ 

router.get('/userPlayer/welcome', productsController.redirect);

// /*** GET ONE PRODUCT ***/ 

// router.get('/detail/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 

router.get('/editPlayerForm/:id/', productsController.edit);
router.patch('/editPlayerForm/:id/',upload.any(), productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
