const userOwner = require('../models/UserOwner')

function userLoggedOwner(req, res, next) {


  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userOwnerEmail;
  let userOwnerCookie = userOwner.findByField('email', emailInCookie);
 

  if (userOwnerCookie) {
    
    req.session.userOwnerLogged = userOwnerCookie;
  }

  if (req.session.userOwnerLogged) {
    res.locals.isLogged = true;
    res.locals.userOwnerLogged = req.session.userOwnerLogged;
  }
  
  next();
}


module.exports = userLoggedOwner