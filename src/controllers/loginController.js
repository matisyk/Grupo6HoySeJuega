const fs = require('fs');
const path = require('path');
const {
  validationResult
} = require('express-validator');
const User = require('../models/User')
const bcryptjs = require('bcryptjs');

const controllerLogin = {

  loginCourt: (req, res) => {


    res.render("partial/login/loginCourt")
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync('userOwner.json', {
        encoding: 'utf8'
      });
      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON)
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcryptjs.compareSync(req.body.password, users[i].password)) {
            let usuarioALoguearse = users[i];
            break;
          }
        };
      }
      if (usuarioALoguearse == undefined) {
        return res.render('loginCourt', {
          errors: [
            {msg: 'Credenciales invalidas'}
          ]
        });
      } 
      req.session.usuarioALogueado = usuarioALoguearse;
      res.render("partial/register/redireccion", {
        id
      })

    } else {
      return res.render('loginCourt', {
        errors: errors
      });
    }
  },

  loginPlayer: (req, res) => {

    res.render("partial/login/loginPlayer")
  },

}
module.exports = controllerLogin