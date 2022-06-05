const fs = require('fs');
const path = require('path');
const ownersFilePath = path.join(__dirname, '../database/userOwnerDataBase.json');
const playersFilePath = path.join(__dirname, '../database/userPlayerDataBase.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));
const player = JSON.parse(fs.readFileSync(playersFilePath, 'utf-8'));


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
    let id = req.params.id
    let userPlayer = player.find(userPlayer => userPlayer.id == id)
    res.render('partial/register/editPlayerForm', {
    userPlayer
    })
  }

}
module.exports = registerController