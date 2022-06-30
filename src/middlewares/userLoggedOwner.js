function userLoggedOwner(req, res, next) {

  res.locals.isLogged = false;

  if (req.session && req.session.userOwnerLoggedOwner) {
    res.locals.isLogged = true;
    res.locals.userOwnerLoggedOwner = req.session.userOwnerLoggedOwner;
  }
  console.log(res.locals.userOwnerLoggedOwner)
  next();
}

module.exports = userLoggedOwner