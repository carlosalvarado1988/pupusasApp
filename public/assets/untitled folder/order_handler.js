var _ = require('underscore');


var Order = function(opts){
   _.extend(this, opts);
  this.lineItems = [];
}


Order.prototype.addLineItem = function(item) {
  this.lineItems.push(item);
}

Order.prototype.calculateTotal = function(next) {
     var self = this;
     self.subtotal = 0;
     _.each(this.lineItems, function(item) {
       self.subtotal += item.price;

       if (_.last(self.lineItems) == item) {
         next();
       }
     })
};

Order.prototype.calculateTax = function(done) {
  this.tax = this.subtotal * 0.095;
  this.total = this.tax + this.subtotal;
  done();
}

Order.prototype.calculate = function(done) {
  var self = this;
  self.calculateTotal(function() {
    self.calculateTax(function() {
      done();
    })
  })
}

var o = new Order();

o.addLineItem({name: 'food', price: 25});
o.addLineItem({name: 'drink', price: 23})

o.calculate(function() {
  console.log(o);
});

module.exports = orderobj;
