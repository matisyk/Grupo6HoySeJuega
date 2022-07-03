function userLoggedOwner(req, res, next) {

  res.locals.isLogged = false;

  if (req.session && req.session.userOwnerLogged) {
    res.locals.isLogged = true;
    res.locals.userOwnerLogged = req.session.userOwnerLogged;
  }
  next();
}


module.exports = userLoggedOwner