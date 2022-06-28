function logueadoPlayer(req, res, next) {
    if (req.session.userLoggedPlayer) {
      return res.redirect("/userPlayer/perfilDeJugador/" + req.session.userLoggedPlayer.id)
    }
    next();
  }
  
  module.exports = logueadoPlayer