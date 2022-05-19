const userPlayerController = {

  vistaJugador: (req, res) => {

    res.render("partial/userPlayer/vistaJugador")
  },

  perfilDeJugador: (req, res) => {

    res.render("partial/userPlayer/perfilDeJugador")
  },

  shiping: (req, res) => {

    res.render("partial/userPlayer/shiping")
  },
  reservarCancha: (req, res) => {

    res.render("partial/userPlayer/reservarCancha")
  },

  vistaCanchaInfo: (req, res) => {

    res.render("partial/userPlayer/vistaCanchaInfo")
  },

  elegirCancha: (req, res) => {

    res.render("partial/userPlayer/elegirCancha")
  },
  equipo: (req, res) => {

    res.render("partial/userPlayer/equipo")
  },
}

module.exports = userPlayerController