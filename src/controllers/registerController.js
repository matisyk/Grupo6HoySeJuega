const fs = require('fs');
const path = require('path');
const ownersFilePath = path.join(__dirname, '../database/userOwnerDataBase.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));


const registerController = {

  formularioDatosCancha: (req, res) => {

    res.render("partial/register/formularioDatosCancha")
  },

  formularioDatosJugador: (req, res) => {

    res.render("partial/register/formularioDatosJugador")
  },

  register: (req, res) => {

    res.render("partial/register/register")
  },

  editOwnerForm: (req, res) => {
    let id = req.params.id
    let userOwner = owners.find(userOwner => userOwner.id == id)

    res.render('partial/register/editOwnerForm', {
      userOwner
    })
  },

  editPlayerForm: (req, res) => {
    res.render('partial/register/editPlayerForm')
  }

}
module.exports = registerController