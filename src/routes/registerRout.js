const express = require('express')
const router = express.Router();
const { body } = require ('express-validator')
// const multer = require('multer');



const registerController = require('../controllers/registerController')

router.get('/', registerController.register);
router.get('/registerPlayer', registerController.formularioDatosJugador);
router.get('/registerOwner', registerController.formularioDatosCancha);
const validateRegister =[
    body ('nombre').notEmpty().withMessage('Debe completar el campo "Nombre"'),
    body ('apellido').notEmpty().withMessage('Debe completar el campo "Apellido"')
]

router.get('/editOwnerForm/:id/', registerController.editOwnerForm);
router.put('/editOwnerForm/:id/', registerController.update);

router.get('/editPlayerForm', registerController.editPlayerForm);

module.exports = router;
