const fs = require('fs');
const path = require('path');
const ownersFilePath = path.join(__dirname, '../database/userOwnerDataBase.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));

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
        res.render("partial/userOwner/vistaCancha", {userOwner, canchas, escuelitas, torneos})
      },
      canchas: (req, res) => {
        let id = req.params.id
        let cancha = courts.find(cancha =>cancha.id == id)
        res.render("partial/userOwner/vistaCancha", {cancha})
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