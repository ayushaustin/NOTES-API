const mongoose = require("mongoose");

const notes_schema =mongoose.Schema({
    
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:"userid is required"

    }
    
})
module.exports = mongoose.model("notes",notes_schema)