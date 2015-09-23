var _ = require('underscore');
var express = require('express');
var restify = require('express-restify-mongoose');
var router = express.Router();
//var formidable = require('formidable');
var User = require('user');
var Profile = require('profile');

//var User = require('user');
//var Profile = require('profile');

var passport = require('passport');

router.get('/', function(req,res) {
	res.render('dashboard');
	console.log('/ GET for server: dashboard rendered');

});

//router.get('/select_city', function(req,res) {
	//res.render('select_city', {});
	//console.log('ahora se utilizo el GET router controller back-end');
	//});



//router.post('/select_city', function(req,res){
		//	console.log('/select_city POST to server: router controller back-end /select_pupuseria redirected');
 // var locationArray = _.map($("select").toArray(), function(item){return {name : item.name, val: $(item).val()}});
 // localStorage["select_city"]=JSON.stringify(locationArray);
 // console.log('localStorage.select_city', localStorage.select_city);
//
//});


// testing templates - edit after all templates good
// router.get('/where', function(req,res) {
// 	res.render('select_place', {});

// });

router.get('/menutest', function(req,res) {
	res.render('menu_board', {});

});

// router.get('/where', function(req,res) {
// 	res.render('select_place', {});
// });

// router.get('/restaurants/:id', function(req,res) {
// 	res.render('menu_board', {id: req.params.id});

// });


//move observer (jquery events to my view)
//the pick it up neeeded the event to read the element and send it to the cdn thing
//use :id to select specific place
//backbone view manage all observation, it needs to have template loaded.
// create hole elements




// router.get('/modal', function(req,res) {
// 	res.render('modalbase', {});

// });

// router.get('/login_modal', function(req,res) {
// 	res.render('login_modal', {});

// });




router.get('/pupuseria_selection', function(req,res) {
	res.render('pupuseria_selection', {});

});
router.get('/payment', function(req,res) {
	res.render('payment', {});

});


//router.get('/select_pupuseria', function(req,res) {res.render('select_pupuseria', {});});
//router.post('/select_pupuseria', function(req,res){
 // res.redirect('/order_pupusas')
//});


// router.get('/order/new', function(req,res) {
// 	res.render('order_new', {});
// });


router.get('/login', function(req, res) {
  // Display the Login page with any flash message, if any
 res.render('login', {});
 console.log('get /log catched by routes_controllers.js .. no action here')
});



module.exports = router;