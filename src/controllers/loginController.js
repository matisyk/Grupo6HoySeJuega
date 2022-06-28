const fs = require('fs');
const path = require('path');
const {
  check,
  validationResult,
  body
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User')


const controllerLogin = {

  loginCourt: (req, res) => {
    res.render("partial/login/loginCourt")
  },

  processLogin: (req, res) => {

    let userToLogin = User.findByField('email', req.body.email)

    if (userToLogin) {
      let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (isOkPassword) {

        delete userToLogin.password;
        req.session.userLoggedOwner = userToLogin
        return res.redirect("/userOwner/vistaCancha/" + req.session.userLoggedOwner.id)
      }

      return res.render('partial/login/loginCourt', {
        errors: {
          password: {
            msg: 'Error en tu contraseña'
          }
        }
      });
    }

    return res.render('partial/login/loginCourt', {
      errors: {
        email: {
          msg: 'No se encuentra registrado este mail'
        }
      }
    });

  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/")
  },

  loginPlayer: (req, res) => {

    res.render("partial/login/loginPlayer")
  },

}
module.exports = controllerLogin