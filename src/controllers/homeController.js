const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');

const HomeP = db.HomePlayer;
const HomeO = db.HomeOwner


const controller = {

  index: (req, res) => {

    let homep = HomeP.findAll();
    let homeo = HomeO.findAll();

    Promise
      .all([homep, homeo])
      .then(([homep, homeo]) => {
        res.render("partial/home/index", {
          homep,
          homeo
        })
        
    })
  },


}
module.exports = controller