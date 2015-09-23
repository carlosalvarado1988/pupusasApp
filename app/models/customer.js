var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Customer = new Schema({}, {strict: false});

module.exports = mongoose.model('Customer', Customer);