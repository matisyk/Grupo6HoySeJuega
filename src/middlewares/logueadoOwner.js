function logueadoOwner(req, res, next) {
  if (req.session.userLoggedOwner) {
    return res.redirect("/userOwner/vistaCancha/" + req.session.userLoggedOwner.id)
  }
  next();
}

module.exports = logueadoOwner