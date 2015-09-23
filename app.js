
var _ = require('underscore');
var express = require('express');
var app = express();
var path = require('path');
var config = require('config');

_.each([
  'app/controllers', 
  'app/models',
  'lib'

], function(folder) {
  require('app-module-path').addPath(path.join(__dirname, folder));
});
console.log(module)

var exphbs  = require('express-handlebars');

var cookieParser = require('cookie-parser');
var methodOverride = require("method-override");
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
// requires the model with Passport-Local Mongoose plugged in
var User = require('user');
var Profile = require('profile');
//var Purchase = require('./models/purchase');
//use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());
//use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
var mongoose = require('mongoose');
mongoose.connect(config.db, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});





var exphbs = require('express-handlebars');
var hbs = exphbs.create({
  extname:'html', 
  defaultLayout: 'main.handlebars',
  layoutsDir: 'app/views/layouts',
  viewsDir: 'app/views',
  partialsDir: [
   'shared/templates/',
   'views/partials/'
  ]
});


app.locals = _.extend(app.locals, require('locals'));
app.engine('html', hbs.engine);
app.set('view engine', 'html');

//app.set('view engine', 'html');

app.use(function exposeTemplates(req, res, next) {
    hbs.getTemplates('shared/templates', {
      cache      : app.enabled('view cache'),
      precompiled: true
    }).then(function (templates) {
      var extRegex = new RegExp(hbs.extname + '$');
      templates = Object.keys(templates).map(function (name) {
        return {
          name    : name.replace(extRegex, ''),
          template: templates[name]
        };
      });
      if (templates.length) {
        res.locals.templates = templates;
      }
      setImmediate(next);
    })
    .catch(next);
  })

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(process.cwd(), 'app/views'));
app.set('layout', path.join(process.cwd(), 'app/views/layouts/main'));
app.set('partials', {});

app.use(methodOverride());

//require('routes_controllers')


app.use(require('routes_controllers'));
app.use(require('log_controllers'));
//app.use(require('order_handler'));

var p = path.resolve(__dirname + '/public/assets');
app.use(express.static(p));

app.listen(3000);


