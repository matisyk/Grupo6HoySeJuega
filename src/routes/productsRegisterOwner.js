// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require ('path')
const { body } = require('express-validator');
const logueadoOwner = require('../middlewares/logueadoOwner')


// ************ Controller Require ************
const productsController = require('../controllers/productsRegisterOwnerController');

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

const upload = multer({ storage: storage })

const validations = [
  body("nombre").notEmpty().withMessage('Tienes que escribir un nombre'),
  body("apellido").notEmpty().withMessage('Tienes que escribir un apellido'),
  body("email").notEmpty().withMessage('Tienes que escribir un email'),
  body("password").notEmpty().withMessage('Tienes que escribir una contraseña'),
  body("nombreDelLugar").notEmpty().withMessage('Tienes que escribir un nombre del lugar'),
  body("provincia").notEmpty().withMessage('Tienes que escribir una provincia'),
  body("localidad").notEmpty().withMessage('Tienes que escribir una localidad'),
  body("municipio").notEmpty().withMessage('Tienes que escribir un municipio'),
  body("calle").notEmpty().withMessage('Tienes que escribir una calle'),
  body("numeracion").notEmpty().withMessage('Tienes que escribir una numeracion'),
  body("telefono").notEmpty().withMessage('Tienes que escribir un telefono'),
  body("telefono2").notEmpty().withMessage('Tienes que escribir un telefono')
];

router.get('/', productsController.register);

/*** CREATE ONE PRODUCT ***/ 

router.get('/registerOwner', logueadoOwner, productsController.create);
router.post('/registerOwner', upload.any("img-cancha"), validations, productsController.store); 

/*** REDIRECT ***/ 

router.get('/userOwner/welcome', logueadoOwner, productsController.redirect); 

// /*** GET ONE PRODUCT ***/ 

// router.get('/detail/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 

router.get('/editOwnerForm/:id/', logueadoOwner, productsController.edit);
router.patch('/editOwnerForm/:id/',upload.any(), productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
