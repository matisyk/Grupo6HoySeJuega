function noLogueadoPlayer(req, res, next) {
    if (!req.session.userLoggedPlayer) {
      return res.redirect("/login/loginPlayer")
    }
    next();
  }
  
  module.exports = noLogueadoPlayer