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

}
module.exports = registerController