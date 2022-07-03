function noLogueadoOwner(req, res, next) {
  if (!req.session.userLoggedOwner) {
    return res.redirect("/userOwner/loginCourt")
  }
  next();
}

module.exports = noLogueadoOwner