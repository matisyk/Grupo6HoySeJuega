const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/userOwnerDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
  
        res.render("partial/userOwner/vistaCancha")
      },

      detalle: (req, res) => {
  
        res.render("partial/userOwner/detalle")
      },

      edit: (req, res) => {
		
        let id = req.params.id
        let product = products.find(product => product.id == id)
    
        res.render("partial/userOwner/editarCancha", {product})
    
      },
}
  
  module.exports = userOwnerController