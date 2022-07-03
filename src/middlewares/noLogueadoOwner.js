function noLogueadoOwner(req, res, next) {
  if (!req.session.userLoggedOwner) {
    console.log("🚀 ~ file: noLogueadoOwner.js ~ line 3 ~ noLogueadoOwner ~ !req.session.userLoggedOwner", !req.session.userLoggedOwner)
    return res.redirect("/userOwner/loginCourt")
  }
  next();
}

module.exports = noLogueadoOwner