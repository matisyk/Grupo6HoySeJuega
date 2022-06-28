const fs = require('fs');
const path = require('path');
const PlayerFilePath = path.join(__dirname, '../database/userPlayer.json');
const players = JSON.parse(fs.readFileSync(PlayerFilePath, 'utf-8'));
const ownersFilePath = path.join(__dirname, '../database/userOwner.json');
const owners = JSON.parse(fs.readFileSync(ownersFilePath, 'utf-8'));


const userPlayerController = {

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
    res.render("partial/userPlayer/vistaCanchaInfo", {userOwner})
  },
  
  elegirCancha: (req, res) => {

    res.render("partial/userPlayer/elegirCancha")
  },
  equipo: (req, res) => {

    res.render("partial/userPlayer/equipo")
  },
}

module.exports = userPlayerController