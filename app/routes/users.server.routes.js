var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function(app) {

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    scope: [ 'email' ],
    failureRedirect: '/signin'
  }));

  app.get('/oauth/facebook/callback', passport.authenticate('facebook',
    { failureRedirect: '/signin' }),
      function(req, res) {
      res.redirect('/');
  });


  app.get('/oauth/twitter', passport.authenticate('twitter', {
    failureRedirect: '/signin'
  }));

  app.get('/oauth/twitter/callback', passport.authenticate('twitter',
    { failureRedirect: '/signin' }),
      function(req, res) {
    // Successful authentication, redirect home.
      res.redirect('/');
  });

  app.get('/oauth/google', passport.authenticate('google', {
    failureRedirect: '/signin',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

  app.get('/oauth/google/callback', passport.authenticate('google',
    { failureRedirect: '/signin' }),
      function(req, res) {
    // Successful authentication, redirect home.
      res.redirect('/');
  });

  app.route('/signup')
  .get(users.renderSignup)
  .post(users.signup);

  app.route('/signin')
  .get(users.renderSignin)
  .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  }));

  app.get('/signout', users.signout);

}