const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id : {type : mongoose.Schema.Types.ObjectId},
    firstname : {type : String , required : true},
    lastname : {type : String , required : true},
    email : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone: {
        type: Number,
        required: true
    },
    middlename :{
        type:String
    },
    city:{type:String,required:true},
    hobby:{type:String,required:true},
    year:{type: Number,
        required: true}

});
module.exports = mongoose.model('User',userSchema);