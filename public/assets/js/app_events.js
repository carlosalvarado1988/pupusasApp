
// scott app.

//when submit happens, it can be catch by front-end with app_event to load page quicky 
//and can by catch with post by the server with log or routes controller.


//the model to store data from form when submit event is catched.
//pupuseriaModel = Backbone.Model.extend({}); the model was added in a different file and is catched by main.handlebars



// all front end goes in public, backbone collections, models, views
// views use backbone events, functions to read events are in view and decide what to do (with front end)
// the event function call the model backbone, this serialize obj goes into the model and this can call the restfull api - form database(mongoose); 




// $(document).ready(function() {

// 	$('#start_orders').on('click', function (e){ 
// 		e.preventDefault();
// 		router.navigate('pupuseria_selection',{trigger:true});
// 		console.log('#start_orders on click navigated to pupuseria_selection');
// 	});
		
	//$('#pupuseria_selection_siguiente').blind('click', function (e){	
	//$('#pupuseria_selection_form').on('submit', function (e){
//e.preventDefault();
    // var FormObj = $('#pupuseria_select_form').serializeJSON();
    // console.log('FormObj serialized :' + FormObj);
    // pupuseria_select = new pupuseriaModel(FormObj);
    //  console.log('the pupuseria instance for pupuseriaModel backbone stores this> '+pupuseria_select);
     


	 //router.navigate('order/new', {trigger: true});
     //console.log('#pupuseria_selection_form on submit event fired to navigate to order/new');

     
 	//});


	//$('#new_order_pedirya').blind('click', function (e){	
 /*$('#order_new_form').on('submit', function (e){
    var OrderObj = $('#order_new_form').serializeJSON();
    
    order = new orderModel(OrderObj);
    
     
     router.navigate('payment',{trigger: true});


   });


    $('#payment_selection_form').on('submit', function (e){
    var paymentObj = $('#payment_selection_form').serializeJSON();
    console.log('paymentObj serialized ' +paymentObj);
    payment = new orderModel(OrderObj);
    console.log('The order instance for paymentModel backbone stores this >' + payment);
    e.preventDefault();

     //if (user is logged in)
     console.log('#payment_selection_form on submit fired navigate to login router backbone');
     router.navigate('login',{trigger: true});
  });

*/

// });


// si activo el click event, los submit no funcionan
// si dejo solo el submit, si pasa de pupuseria_selection a order/new
//pero cuando hago otro submit, la pagina hace un get con todos los elementos en la url y no avanza a cargar payment template



