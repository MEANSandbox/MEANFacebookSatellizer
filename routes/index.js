var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();

var env = {
      AUTH0_DOMAIN:       process.env.AUTH0_DOMAIN || 'rishabh.auth0.com',
    AUTH0_CLIENT_ID:     process.env.AUTH0_CLIENT_ID || 'cUheWwRxm7OLdHBRzlBNhhaI1lxRp6Km',
    AUTH0_CALLBACK_URL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'

};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming Soon.', env: env });
});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
    // res.sendFile(path.resolve('views/login.html'));
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  });


module.exports = router;
