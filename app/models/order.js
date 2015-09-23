
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Order = new Schema({
	_id:      ObjectIdSchema,
	


}, {strict: false});

module.exports = mongoose.model('Order', Order);