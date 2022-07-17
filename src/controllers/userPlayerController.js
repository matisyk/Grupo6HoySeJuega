const fs = require('fs');
const path = require('path');

// Login
const bcryptjs = require('bcryptjs');
const userPlayer = require('../models/UserPlayer')

// DATABA BASE JUGADOR
const db = require('../database/models')
let UserPlayer = db.UserPlayer

const userPlayerController = {

  loginPlayer: (req, res) => {
    res.render("partial/login/loginPlayer")
  },
  processLoginPlayer: (req, res) => {

    // let userPlayerToLogin = userPlayer.findByField('email', req.body.email)

    UserPlayer.findOne({
      where: {
        email: req.body.email
      }
    }).then((userPlayerToLogin) => {

      if (userPlayerToLogin) {
        let isOkPassword = bcryptjs.compareSync(req.body.password, userPlayerToLogin.password);
        console.log("🚀 ~ file: userPlayerController.js ~ line 32 ~ userPlayerToLogin", userPlayerToLogin.password)
        if (isOkPassword) {
          console.log("🚀 ~ file: userPlayerController.js ~ line 34 ~ isOkPassword", isOkPassword)

          delete userPlayerToLogin.password;
          req.session.userLoggedPlayer = userPlayerToLogin

          if (req.body.recordarPlayer) {
            res.cookie('userPlayerEmail', req.body.email, {
              maxAge: (1000 * 60) * 60
            })
          }

          return res.redirect("/register/userPlayer/welcome")
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
    })

  },
  logout: (req, res) => {
    res.clearCookie('userPlayerEmail');
    req.session.destroy();
    return res.redirect("/")
  },

  vistaJugador: (req, res) => {

    res.render("partial/userPlayer/vistaJugador")
  },

  perfilDeJugador: (req, res) => {

    let id = req.params.id
    let userPlayer = players.find(userPlayer => userPlayer.id == id)
    res.render("partial/userPlayer/perfilDeJugador", {
      userPlayer
    })
  },

  carrito: (req, res) => {

    res.render("partial/userPlayer/carrito")
  },
  reservarCancha: (req, res) => {

    res.render("partial/userPlayer/reservarCancha")
  },

  vistaCanchaInfo: (req, res) => {
    let id = req.params.id
    let userOwner = owners.find(userOwner => userOwner.id == id)
    res.render("partial/userPlayer/vistaCanchaInfo", {
      userOwner
    })
  },

  elegirCancha: (req, res) => {

    res.render("partial/userPlayer/elegirCancha")
  },
  equipo: (req, res) => {

    res.render("partial/userPlayer/equipo")
  },
}

module.exports = userPlayerController