// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require ('path')


// ************ Controller Require ************
const registerPlayerController = require('../controllers/registerPlayerController');

// ************ MULTER ************

const storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, '/img/jugadores')
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

router.get('/registerPlayer', registerPlayerController.create); 
router.post('/registerPlayer', upload.any("img"), registerPlayerController.store); 


// /*** GET ONE PRODUCT ***/ 

// router.get('/detail/:id/', registerPlayerController.detail); 

// /*** EDIT ONE PRODUCT ***/ 

//router.get('/editarCancha/:id/', registerPlayerController.edit); 
// router.patch('/edit/:id/',upload.any(), registerPlayerController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/delete/:id', registerPlayerController.destroy); 


module.exports = router;
