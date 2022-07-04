function noLogueadoPlayer(req, res, next) {
    if (!req.session.userLoggedPlayer) {

      return res.redirect("/userPlayer/loginPlayer")
    }
    next();
  }
  
  module.exports = noLogueadoPlayer