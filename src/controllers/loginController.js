const controllerLogin = {

  loginCourt: (req, res) => {

    res.render("partial/login/loginCourt")
  },

  loginPlayer: (req, res) => {

    res.render("partial/login/loginPlayer")
  },

}
module.exports = controllerLogin