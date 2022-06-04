const fs = require('fs');
const path = require('path');
const ownersFilePath = path.join(__dirname, '../database/userOwnerDataBase.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));

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
        res.render("partial/userOwner/vistaCancha", {userOwner})
      },

      detalle: (req, res) => {
  
        res.render("partial/userOwner/detalle")
      },
}
  
  module.exports = userOwnerController