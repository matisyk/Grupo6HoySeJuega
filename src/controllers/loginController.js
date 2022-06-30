const fs = require('fs');
const path = require('path');
const {
  check,
  validationResult,
  body
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const userOwner = require('../models/UserOwner')
const userPlayer = require('../models/UserPlayer')


const controllerLogin = {

  loginCourt: (req, res) => {
    res.render("partial/login/loginCourt")
  },

  processLoginOwner: (req, res) => {

    let userOwnerToLogin = userOwner.findByField('email', req.body.email)

    if (userOwnerToLogin) {
      let isOkPassword = bcryptjs.compareSync(req.body.password, userOwnerToLogin.password);
      if (isOkPassword) {

        delete userOwnerToLogin.password;
        req.session.userOwnerLogged = userOwnerToLogin
        return res.redirect("/userOwner/vistaCancha/" + req.session.userOwnerLogged.id)
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
    console.log(req.session)
    return res.redirect("/")
  },
  

  loginPlayer: (req, res) => {
    res.render("partial/login/loginPlayer")
  },
  processLoginPlayer: (req, res) => {

    let userPlayerToLogin = userPlayer.findByField('email', req.body.email)

    if (userPlayerToLogin) {
      let isOkPassword = bcryptjs.compareSync(req.body.password, userPlayerToLogin.password);
      if (isOkPassword) {

        delete userPlayerToLogin.password;
        req.session.userLoggedPlayer = userPlayerToLogin
        return res.redirect("/userPlayer/perfilDeJugador/" + req.session.userLoggedPlayer.id)
      }

      return res.render('partial/login/loginPlayer', {
        errors: {
          password: {
            msg: 'Error en tu contraseña'
          }
        }
      });
    }

    return res.render('partial/login/loginPlayer', {
      errors: {
        email: {
          msg: 'No se encuentra registrado este mail'
        }
      }
    });
    
  }
};
module.exports = controllerLogin

