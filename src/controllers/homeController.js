const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');

const HomeP = db.HomePlayer;
const HomO = db.HomeOwner


const controller = {

  index: (req, res) => {

    let homep = HomeP.findAll({
      include: ['imagenPlayer']
    });

    Promise
      .all([homep])
      .then(([homep]) => {
      console.log("🚀 ~ file: homeController.js ~ line 24 ~ .then ~ homep", homep.imagenPlayer)
      
        res.render("partial/home/index", {
          homep
        })
    })
  },


}
module.exports = controller