var mongoose=require("mongoose");
//USER-email,name
var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            // Mongoose object id belonging to post
            ref: "Post"
        }
    ]
});
module.exports= mongoose.model("User",userSchema);