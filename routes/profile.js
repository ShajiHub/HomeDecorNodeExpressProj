var express = require('express');
const { sendStatus } = require('express/lib/response');
var router = express.Router();
var ssn;

/* GET profile page. */
router.get('/', function(req, res, next) {
  ssn = req.session;
  // check if the user has signed up or logged in
  if(ssn.userEmail){
  res.render('profile', {userFirstName: ssn.firstName, userLastName: ssn.lastName, userEmail: ssn.userEmail});
  }
  else
  //if not redirect o login
  ssn.profileError = " Please Login first";
  res.redirect('login');
});

module.exports = router;