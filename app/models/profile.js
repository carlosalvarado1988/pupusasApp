var _ = require('underscore');
var uuid = require('uuid');
var config = require('config');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");

var Profile = new Schema({
  gender: {type: String },
  username: {type: String },
  user: { type:Schema.ObjectId, ref:"User" }
}, {strict: false});

module.exports = mongoose.model('Profile', Profile);