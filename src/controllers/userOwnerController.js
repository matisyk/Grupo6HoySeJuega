const fs = require('fs');
const path = require('path');

const db = require('../database/models')

// Login
const bcryptjs = require('bcryptjs');
const userOwner = require('../models/UserOwner')

//Canchas 
const courtFilePath = path.join(__dirname, '../database/courtDataBase.json');
const courts = JSON.parse(fs.readFileSync(courtFilePath, 'utf-8'));

const canchas = courts.filter(court => court.category == 'cancha');

//Escuelitas 
const schoolFilePath = path.join(__dirname, '../database/schoolDataBase.json');
const schools = JSON.parse(fs.readFileSync(schoolFilePath, 'utf-8'));

const escuelitas = schools.filter(school => school.category == 'escuelita');

//Torneos 
const torneoFilePath = path.join(__dirname, '../database/torneoDataBase.json');
const torneos1 = JSON.parse(fs.readFileSync(torneoFilePath, 'utf-8'));

const torneos = torneos1.filter(torneo => torneo.category == 'torneo');

// constantes de las bases de datos de sequelize modules
const UserOwner = db.UserOwner;
const TelefonoOwner = db.TelefonoOwner;
const MedioDePago = db.MedioDePago;
const LogoOwner = db.LogoOwner;
const ImagenOwner = db.ImagenOwner;
const DetalleLugarOwner = db.DetalleLugarOwner;
const Cancha = db.Cancha;
const Ubicacion = db.Ubicacion


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
.then((userOwnerToLogin)=> {
console.log("🚀 ~ file: userOwnerController.js ~ line 54 ~ .then ~ userOwnerToLogin", userOwnerToLogin)
if (userOwnerToLogin) {
      let isOkPassword = bcryptjs.compareSync(req.body.password, userOwnerToLogin.password);
      console.log("🚀 ~ file: userOwnerController.js ~ line 57 ~ .then ~ req.body.password", req.body.password)
      console.log("🚀 ~ file: userOwnerController.js ~ line 57 ~ .then ~  userOwnerToLogin.password",  userOwnerToLogin.password)
      console.log("🚀 ~ file: userOwnerController.js ~ line 57 ~ .then ~ isOkPassword", isOkPassword)
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
  //  let canchas = Canchas.findAll()
  // le mediosP = MedioDePago.findAll({where: {users_owners_id: "userOwnerID"}})
    Promise
    .all([userOwner, userOwnerID])
    .then(([userOwner, userOwnerID])=> {
      res.render("partial/userOwner/vistaCancha", {
      userOwner,
      canchas,
      escuelitas,
      torneos,
      //mediosP,
      userOwnerLogged: req.session.userOwnerLogged
    })
    })
      console.log("🚀 ~ file: userOwnerController.js ~ line 140 ~ .then ~ userOwner", userOwner)
    
  },
  canchas: (req, res) => {
    let id = req.params.id
    let cancha = courts.find(cancha => cancha.id == id)
    res.render("partial/userOwner/vistaCancha", {
      cancha,
      userOwnerLogged: req.session.userOwnerLogged
    })
  },
  escuelitas: (req, res) => {
    let id = req.params.id
    let escuelita = schools.find(escuelita => escuelita.id == id)
    res.render("partial/userOwner/vistaCancha", {
      escuelita
    })
  },
  torneos: (req, res) => {
    let id = req.params.id
    let torneo = torneos1.find(torneo => torneo.id == id)
    res.render("partial/userOwner/vistaCancha", {
      torneo
    })
  },

  detalle: (req, res) => {

    res.render("partial/userOwner/detalle")
  },
}

module.exports = userOwnerController