const fs = require('fs');
const path = require('path');
const {
  Op
} = require("sequelize");

// Login
const bcryptjs = require('bcryptjs');
const userPlayer = require('../models/UserPlayer')

// DATABA BASE JUGADOR
const db = require('../database/models')
// constantes de las bases de datos de sequelize modules
const UserPlayer = db.UserPlayer;
const TelefonoPlayer = db.TelefonoPlayer;
const AutoValoracion = db.AutoValoracion;
const DeportesPlayers = db.Deporte;
const ImagenPlayer = db.ImagenPlayer;
const HoraPlayer = db.HoraPlayer;
const DiaPlayer = db.DiaPlayer;
const ZonasDeJuego = db.ZonaDeJuego;
const UserOwner = db.UserOwner;
const TipoCh = db.TipoDeCancha;
const Cancha = db.Cancha;
const Ubicacion = db.Ubicacion


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

        if (isOkPassword) {


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

    let userPlayerID = req.params.id
    let userPlayer = UserPlayer.findByPk(userPlayerID, {
      include: ['zonas', 'autoV']
    })
    let img = ImagenPlayer.findByPk(userPlayerID, {
      include: [
        "userPlayerI"
      ]
    })
    let telefono = TelefonoPlayer.findByPk(userPlayerID, {
      include: ['userPlayerT']
    })
    let zona = ZonasDeJuego.findAll()
    let autoV = AutoValoracion.findAll()
    Promise
      .all([userPlayer, userPlayerID, img, telefono, zona, autoV])
      .then(([userPlayer, userPlayerID, img, telefono, zona, autoV]) => {

        res.render("partial/userPlayer/perfilDeJugador", {
          userPlayer,
          userPlayerID,
          img,
          telefono,
          zona,
          autoV
        })
      })


  },

  carrito: (req, res) => {

    res.render("partial/userPlayer/carrito")
  },
  reservarCancha: (req, res) => {
    let dueñosCancha = UserOwner.findAll()
    let zonas = Ubicacion.findAll();
    let deportes = DeportesPlayers.findAll();
    let tiposCancha = TipoCh.findAll();
    let horarios = HoraPlayer.findAll();
    let dias = DiaPlayer.findAll()

    Promise
      .all([zonas, deportes, dueñosCancha, tiposCancha, dias, horarios])
      .then(([zonas, deportes, dueñosCancha, tiposCancha, dias, horarios]) => {
        res.render("partial/userPlayer/reservarCancha", {
          zonas,
          deportes,
          dueñosCancha,
          tiposCancha,
          dias,
          horarios
        })
      })
  },

  vistaCanchaInfo: (req, res) => {
    let id = req.params.id
    let userOwner = owners.find(userOwner => userOwner.id == id)
    res.render("partial/userPlayer/vistaCanchaInfo", {
      userOwner
    })
  },

  elegirCancha: (req, res) => {
    let dueñosCancha = req.body.dueñosCancha
    let dias = req.body.dias
    let horas = req.body.horas
    let zona = req.body.zonas
    let deporte = req.body.deporte
    let tiposCancha = req.body.tiposCancha
    
    let canchas = Cancha.findAll({
      include: ['userOwner', 'deporte', 'tipoDeCancha', 'ubicacionC'],
      where: {
        deportes_players_id: deporte,
        tipo_de_cancha_id: tiposCancha,
        
      },
      
    })
    
    Promise
      .all([canchas, ])
      .then(([canchas, ]) => {

      res.render("partial/userPlayer/elegirCancha", {
        canchas,
        
      })
    })
  },

  equipo: (req, res) => {
    res.render("partial/userPlayer/equipo", {
      userPlayer
    })
  },
  buscarJugador: (req, res) => {

    res.render("partial/userPlayer/buscarJugador")
  },
}


module.exports = userPlayerController