const fetch = require('node-fetch');

module.exports = {

  list: async (req, res, next) => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre")
      .then(response => response.json())
      .then(geoubicacion => {
      return res.render(geoubicacion);
    })
}

}