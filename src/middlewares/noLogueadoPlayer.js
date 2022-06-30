function noLogueadoPlayer(req, res, next) {
    if (!req.session.userLoggedPlayer) {
      console.log("🚀 ~ file: noLogueadoPlayer.js ~ line 3 ~ noLogueadoPlayer ~ req.session.userLoggedPlayer", !req.session.userLoggedPlayer)
      return res.redirect("/login/loginPlayer")
    }
    next();
  }
  
  module.exports = noLogueadoPlayer