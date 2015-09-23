

//create item views

var pupuseriaSelectionView = Backbone.View.extend({

    initialize: function(){
    //     to refresh view when model is changed.
    //        this.model.bind('change', _.bind(this.render, this));
    },
    //To add new elements in the view we use tagName, id, className 
    //eg. tagName: ul for a list-items
    //         id: location_items
    //         className: container
    // to refer to an existing element we use el.
    // <ul id="location_items" class="container"></ul>
    //


    // # for element  . for class
    // $el property = $(view.el) 
    // $(selector) function = $(view.el).find(selector)
    el: '#workspace',

    events:  {
      "submit form": "next_form"
    },

    next_form: function(e){     
        e.preventDefault();
        this.instance_location();
        router.navigate('order/new', {trigger: true});
    },

    instance_location: function(e){
        var formObj = $('#pupuseria_selection_form').serializeJSON()
        pupuseria_select = new pupuseriaModel(formObj);
        console.log('the pupuseria_select stores this> ', formObj, JSON.stringify(pupuseria_select));
    },

    template: _.template(Handlebars.templates.pupuseria_selection()),
    // if the template is going to feed elements with a model attribure ej:
    // <input id="delivery_check" type="checkbox" {{if delivery}} "checked" {{/if}}>
    // y en el modelo tenemos delivery: true , necesitamos pasar el modelo como this.model.toJSON()
    // template: _.template(Handlebars.templates.pupuseria_selection(this.model.toJSON())),


    render: function (){

        this.$el.html(this.template);
        return this;
    }
    
});

var dashboardView = Backbone.View.extend({
        el: '#workspace',
        events: {
            "click #start_orders ": "start_order"
        } ,
        start_order: function(){
            router.navigate('pupuseria_selection', {trigger:true});
        },
        template: _.template(Handlebars.templates.dashboard()),

        render: function (){
          this.$el.html(this.template);
          return this;
        }
});

var orderView = Backbone.View.extend({
    el: '#workspace',
    events: {
        "submit": "next_page"
    },

    next_page: function(e){
        e.preventDefault();

        router.navigate('payment', {trigger: true});
    },

    order_instance: function(){
        var orderForm = $('#order_new_form').serializeJSON()
        order = new orderModel(orderForm);
        console.log('the pupuseria_select stores this> ', formObj, JSON.stringify(order));
    },

    template: _.template(Handlebars.templates.order_new()),

    render: function(){
        this.$el.html(this.template);
        return this;
    }

});

var paymentView = Backbone.View.extend({
    el: '#workspace',
    events: {
        'submit':'next_page'
    },

    next_page: function(e){
        e.preventDefault();
       // if (user.user){
        
       // router.navigate('confirm_payment', {trigger: true});
   // } 
   // else 
  //  {
        router.navigate('login', {trigger: true});
  //  }

    },

    template: _.template(Handlebars.templates.payment()),

    render: function(){
        this.$el.html(this.template);
        return this;
    }
});


var loginView = Backbone.View.extend({
    el: '#workspace',
    events: {
        'submit':'next_page'
    },

    next_page: function(e){
        e.preventDefault();
    // recognize if cust was in the process, so return to payment page
    // else go to location

    // temporal redirect to dashboar, til manage user status.
       router.navigate('dashboard', {trigger: true});
    },

    template: _.template(Handlebars.templates.login()),

    render: function(){
        this.$el.html(this.template);
        return this;
    }

    });

    var registrationView = Backbone.View.extend({
    el: '#workspace',

    events: {
        'submit':'next_page'
    },

    next_page: function(e){
        e.preventDefault();
       router.navigate('login', {trigger: true});
    },

    template: _.template(Handlebars.templates.registration()),

    render: function(){
        this.$el.html(this.template);
        return this;
    }
    });

    var forgotpassView = Backbone.View.extend({
    el: '#workspace',
    events: {
        'submit':'next_page',
        'submit': 'reset_process'
    },

    next_page: function(e){
        e.preventDefault();
       router.navigate('login', {trigger: true});
    },

    reset_process: function(){
        // reset password process
    },

    template: _.template(Handlebars.templates.forgot_password()),

    render: function(){
        this.$el.html(this.template);
        return this;
    }

});


// var goto = function(route){
//         console.log('in next form')
        
//             // var FormObj = $('#pupuseria_select_form').serializeJSON();
//     // console.log('FormObj serialized :' + FormObj);
//     // pupuseria_select = new pupuseriaModel(FormObj);
//     //  console.log('the pupuseria instance for pupuseriaModel backbone stores this> '+pupuseria_select);
//         router.navigate(route, {trigger: true});
// }


