const mongoose = require("mongoose");

const user_schema =mongoose.Schema({
    
    username:{
        type:String,
        required:"user is required"
    }
 })
module.exports = mongoose.model("user",user_schema);
