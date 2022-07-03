const fs = require('fs');
const path = require('path');
const ownersFilePath = path.join(__dirname, '../database/userOwner.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));


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

const userOwnerController = {

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
        let id = req.params.id
        let userOwner = owners.find(userOwner => userOwner.id == id)
        res.render("partial/userOwner/vistaCancha", {
          userOwner,
          canchas,
          escuelitas,
          torneos,
          userOwnerLogged: req.session.userOwnerLogged
        })
      },
      canchas: (req, res) => {
        let id = req.params.id
        let cancha = courts.find(cancha =>cancha.id == id)
        res.render("partial/userOwner/vistaCancha", {
          cancha, userOwnerLogged: req.session.userOwnerLogged
        })
      },
      escuelitas: (req, res) => {
        let id = req.params.id
        let escuelita = schools.find(escuelita =>escuelita.id == id)
        res.render("partial/userOwner/vistaCancha", {escuelita})
      },
      torneos: (req, res) => {
        let id = req.params.id
        let torneo = torneos1.find(torneo =>torneo.id == id)
        res.render("partial/userOwner/vistaCancha", {torneo})
      },

      detalle: (req, res) => {
  
        res.render("partial/userOwner/detalle")
      },
}
  
  module.exports = userOwnerController