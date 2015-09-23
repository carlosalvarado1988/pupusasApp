
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Pupuseria = new Schema({}, {strict: false});

module.exports = mongoose.model('Pupuseria', Pupuseria);