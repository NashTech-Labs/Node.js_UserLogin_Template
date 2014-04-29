var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var friendSchema = mongoose.Schema({
    friend             : {
	mainfriendid           :String,
        anotherfriendid        : String,
     }
});



module.exports = mongoose.model('Friend', friendSchema);
