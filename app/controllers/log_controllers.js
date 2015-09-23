var _ = require('underscore');
var express = require('express');
var restify = require('express-restify-mongoose');
var router = express.Router();
//var formidable = require('formidable');
var User = require('user');
var Profile = require('profile');

//var User = require('./models/user');
//var Profile = require('./models/profile');

var passport = require('passport');


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/'); 
});

router.get('/login', function(req, res) {
  // Display the Login page with any flash message, if any
  //res.render('login', {});
  console.log('on log_controllers.js /login GET to server: login NOT rendered from here');
});


router.post('/login_modal', function(req, res) {
  passport.authenticate('local')(req, res, function() {
    //res.redirect('/pupuseria_selection');
    console.log(JSON.stringify(req.body));
    console.log('el post del submit form del modal mando este post');
    res.redirect('/where');

  });
});

//router.get('/login', function(req,res) {res.render('login', {});});
//router.post('/login', function(req, res) {passport.authenticate('local')(req, res, function() {res.redirect('/select_city');});
//});

router.get('/registration', function(req, res){
  res.render('registration', {});
});

router.post('/registration', function(req, res) {
  console.log(req.body);
  User.register(new User(req.body), req.body.password, function(err, user) {
    if (err) {
        console.log(err);
        return res.render('registration', { user : user });
    }
    var profile = new Profile({status: "signup_complete", username: user.username, gender: user.gender});
    
    profile.save(function() {
      user.profile = profile;
      user.save(function() {
        passport.authenticate('local')(req, res, function () {
          res.redirect('/select_city');
        });
      });
    });
  });
});

router.get('/forgot_password', function(req, res){
  console.log('el a href del model creo el get del browser');
  res.render('forgot_password',{});
});

router.post('/forgot_password', passport.authenticate('forgot_password', {
  successRedirect: '/login',
  failureRedirect: '/registration',
  failureFlash : true 
}));

module.exports = router;