const fs = require('fs');
const path = require('path');
const {
  check,
  validationResult,
  body
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../database/userOwner.json');

const controllerLogin = {

  loginCourt: (req, res) => {
    res.render("partial/login/loginCourt")
  },

  processLogin: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.isEmpty()) {
      let usersJSON = fs.readFileSync(usersFilePath, {
        encoding: 'utf-8'
      });
      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON)
      }
      
      let emailUsuario;
      let contrasenaUsuario;

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
        emailUsuario = users[i].email
        
        }
        if (users[i].password == req.body.password) {
          contrasenaUsuario = users[i].password
        }
        if (emailUsuario == users[i].email && contrasenaUsuario == users[i].password) {
           res.send('pasaste bien');
       } else {
           res.send('no podes pasar')
      }
      }
   
    } else {
      return res.send('algo mal hiciste Rick');
    }

  },

  loginPlayer: (req, res) => {

    res.render("partial/login/loginPlayer")
  },

}
module.exports = controllerLogin