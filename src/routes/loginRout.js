const express = require('express')
const router = express.Router();


const loginController = require('../controllers/loginController')

router.get('/loginCourt', loginController.loginCourt);
router.get('/loginPlayer', loginController.loginPlayer);

module.exports = router;