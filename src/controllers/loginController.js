const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const bcryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../database/userOwner.json');

const controllerLogin = {

  loginCourt: (req, res) => {
    res.render("partial/login/loginCourt")
  },

  processLogin: (req, res) => {
    return res.send(req.body)
  },

  loginPlayer: (req, res) => {

    res.render("partial/login/loginPlayer")
  },

}
module.exports = controllerLogin