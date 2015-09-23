pupuseriaModel = Backbone.Model.extend({

    // each time and instance is created or used(modified)
	initialize: function(){
			console.log('pupuseriaModel was initialized');
			// change:name -- listen to esfecific attribute into the model.	
			this.on('change', function(){
				// view render can be bind here to refresh template
				console.log('attribute ?? just changed');
			});

			this.on('invalid', function(model,error){
				console.log(error);
			});
			},


	//default attributes for a pupuseria place
	defaults: {  	
			name: 		'',
			address: 	'',
			city: 		'',
			country: 	'',
			delivery:  false,
				},	

	//end-point to store data, fetch database
	url: function() {
		if (this._id) {
           return '/api/v1/pupuserias/'+ this._id;
		} else {
           return '/api/v1/pupuserias';
		}
	}


	// when a model is instantiated, is creates and ID.
	//uuid uniques or cid created by backbone are availables to use.
	//idAttribute is the id created for the server (id in mongo)

});




orderModel = Backbone.Model.extend({
		url: function() {
		if (this._id) {
           return '/api/v1/orders/'+ this._id;
		} else {
           return '/api/v1/orders';
		}
	}
});
paymentModel = Backbone.Model.extend({
	url: function() {
		if (this._id) {
           return '/api/v1/payments/'+ this._id;
		} else {
           return '/api/v1/payments';
		}
	}
});
