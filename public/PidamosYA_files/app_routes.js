var Workroutes= Backbone.Router.extend({
     // name of route : function
    routes: {
        "":                                             "front",
        "login":                                        "login",
        "registration":                                 "register",
        "forgot_password":                              "forgot_password", 
        "pupuseria_selection":                          "pupuseria_selection",
        "orders":                                       "orders",
        "order/new":                                   "order_new",
        "orders/:id":                                    "show_order",
        "payment":                                       "payment",


        "payment/:questionaire_id":                      "payment",
        "questionaires/:questionaire_id/edit":          "edit_questionaire",
        "questionaires/:questionaire_id/:step_name":    "question_set"
    },
 
    front: function() {
      // $('#workspace').html(Handlebars.templates.dashboard());
      new dashboardView().render();
    },

     login: function() {
       new loginView().render();
       //$('#workspace').html(Handlebars.templates.login());
     },

     registration: function(){
      new registrationView().render();
     },

    forgot_password: function(){
      new forgotpassView().render();
    },

    pupuseria_selection: function(){
      console.log('pupseria selection function put pupuseria_selection on workspace');
      new pupuseriaSelectionView().render();
    },

    order_new: function() {
      console.log('the navigate.order/new key fired the function order_new so template order_new is in workspace');
      // $('#workspace').html(Handlebars.templates.order_new());
      new orderView().render();
    },

    payment: function() {
      console.log('ahora se muestra crear una nueva order');
      $('#workspace').html(Handlebars.templates.payment());
      new paymentView().render();
      } 


});

var router = new Workroutes();
Backbone.history.start({pushState: true});