var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    relationship = require("mongoose-relationship");

var User = new Schema({
  username:  {type: String },
  telephone: {type: String },
  email:     {type: String },
  gender:    {type: String },
  terms:     {type: Boolean, default: false },
  profile: { type:Schema.ObjectId, ref:"Profile" } 
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);