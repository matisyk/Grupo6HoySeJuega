const fs = require('fs');
const path = require('path');

const db = require('../database/models')

// Login
const bcryptjs = require('bcryptjs');
const userOwner = require('../models/UserOwner')


// constantes de las bases de datos de sequelize modules
const UserOwner = db.UserOwner;
const TelefonoOwner = db.TelefonoOwner;
const MedioDePago = db.MedioDePago;
const LogoOwner = db.LogoOwner;
const ImagenOwner = db.ImagenOwner;
const ImagenCancha = db.ImagenCancha;
const DetalleLugarOwner = db.DetalleLugarOwner;
const Cancha = db.Cancha;
const Ubicacion = db.Ubicacion
const Escuelita = db.Escuelita;
const Torneo = db.Torneo


const userOwnerController = {

  loginCourt: (req, res) => {
    res.render("partial/login/loginCourt")
  },

  processLoginOwner: (req, res) => {

    //let userOwnerToLogin = userOwner.findByField('email', req.body.email)
    UserOwner.findOne({
        where: {
          email: req.body.email
        }
      })
      .then((userOwnerToLogin) => {

        if (userOwnerToLogin) {
          let isOkPassword = bcryptjs.compareSync(req.body.password, userOwnerToLogin.password);

          if (isOkPassword) {

            delete userOwnerToLogin.password;
            req.session.userOwnerLogged = userOwnerToLogin

            if (req.body.recordarOwner) {
              res.cookie('userOwnerEmail', req.body.email, {
                maxAge: (1000 * 60) * 60
              })
            }

            return res.redirect("/register/userOwner/welcome")
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
      })


  },
  logout: (req, res) => {
    res.clearCookie('userOwnerEmail');
    req.session.destroy();
    return res.redirect("/")
  },

  agenda: (req, res) => {

    res.render("partial/userOwner/agenda")
  },

  crearTorneo: (req, res) => {

    res.render("partial/userOwner/crearTorneo")
  },

  registrarCancha: (req, res) => {

    res.render("partial/userOwner/registrarCancha")
  },

  registrarEscuelita: (req, res) => {

    res.render("partial/userOwner/registrarEscuelita")
  },

  reservaCancha: (req, res) => {

    res.render("partial/userOwner/reservaCancha")
  },

  vistaCancha: (req, res) => {
    let userOwnerID = req.params.id
    let userOwner = UserOwner.findByPk(userOwnerID)
    let img = ImagenOwner.findByPk(userOwnerID, {
      include: [
        "userOwnerI"
      ]
    })
    let detalles = DetalleLugarOwner.findByPk(userOwnerID, {
      include: [
        "userOwnerD"
      ]
    })
    let canchas = Cancha.findAll({
      where: {
        users_owners_id: userOwnerID
      }
    }, {
      include: ['ImagenCancha']
    })
    let escuelitas = Escuelita.findAll( {
      include: ['deporteE', 'genero', "profesor", "diaYhora", "cancha"],
        where: {
          users_owners_id: userOwnerID
      }
    })
    const torneos = Torneo.findAll({
      where: {
        users_owners_id: userOwnerID
      }
    })
    const mediosdepago = MedioDePago.findByPk(userOwnerID, {
      include: ["userOwnerMP"]
    })
    const ubicacion = Ubicacion.findByPk(userOwnerID, {
      include: ["userOwnerU"]
    })
    const logo = LogoOwner.findByPk(userOwnerID, {
      include: ["userOwnerL"]
    })
   
    Promise
      .all([userOwner, userOwnerID, img, canchas, escuelitas, torneos, mediosdepago, detalles, ubicacion,logo])
      .then(([userOwner, userOwnerID, img, canchas, escuelitas, torneos, mediosdepago, detalles, ubicacion,logo]) => {
      console.log("🚀 ~ file: userOwnerController.js ~ line 154 ~ .then ~ escuelitas", escuelitas)
    

        res.render("partial/userOwner/vistaCancha", {
          userOwner,
          userOwnerID,
          img,
          canchas,
          escuelitas,
          torneos,
          mediosdepago,
          detalles,
          ubicacion,
          logo,
          
          userOwnerLogged: req.session.userOwnerLogged
        })
      }).catch(error => res.send(error))

  },

  detalle: (req, res) => {

    res.render("partial/userOwner/detalle")
  },
}

module.exports = userOwnerController