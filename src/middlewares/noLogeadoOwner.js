function noLogueadoOwner(req, res, next) {
  if (!req.session.userLoggedOwner) {
    return res.redirect("/login/loginCourt")
  }
  next();
}

module.exports = noLogueadoOwner