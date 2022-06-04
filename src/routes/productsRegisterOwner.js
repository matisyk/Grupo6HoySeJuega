// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require ('path')


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


/*** CREATE ONE PRODUCT ***/ 

router.get('/registerOwner', productsController.create); 
router.post('/registerOwner', upload.any("img-cancha"), productsController.store); 


// /*** GET ONE PRODUCT ***/ 

// router.get('/detail/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 

router.get('/editarCancha/:id/', productsController.edit); 
// router.patch('/edit/:id/',upload.any(), productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/delete/:id', productsController.destroy); 


module.exports = router;