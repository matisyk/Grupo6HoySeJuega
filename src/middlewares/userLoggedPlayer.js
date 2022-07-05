const userPlayer = require('../models/UserPlayer')

function userLoggedPlayer(req, res, next) {


  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userPlayerEmail;
  let userPlayerCookie = userPlayer.findByField('email', emailInCookie);
 

  if (userPlayerCookie) {
    
    req.session.userLoggedPlayer = userPlayerCookie;
  }

  if (req.session.userLoggedPlayer) {
    res.locals.isLogged = true;
    res.locals.userLoggedPlayer = req.session.userLoggedPlayer;
  }
  
  next();
}


module.exports = userLoggedPlayer