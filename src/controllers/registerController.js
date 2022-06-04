const registerController = {

  // formularioDatosCancha: (req, res) => {

    // res.render("partial/register/formularioDatosCancha")
  // },

  formularioDatosJugador: (req, res) => {

    res.render("partial/register/formularioDatosJugador")
  },

   register: (req, res) => {

     res.render("partial/register/register")
   },

   editOwnerForm: (req, res) => {
     res.render('partial/register/editOwnerForm')
   },

   editPlayerForm: (req, res) => {
    res.render('partial/register/editPlayerForm')
  }

}
module.exports = registerController