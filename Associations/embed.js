var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


// POST-title, content
var postSchema=new mongoose.Schema({
    title:String,
    content:String
});
var postModel=mongoose.model("Post",postSchema);

//USER-email,name
var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});
var User= mongoose.model("User",userSchema);


// 

User.findOne({name:"Hermoine Granger"},function(err,user){
    if(err){
               // console.log(err);
            }else{
                user.posts.push({
                   title:"Three things",
                   content:"VV" 
                });
                user.save(function(err,user){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(user);
                    }
                });
            }
});

// var newPost=new postModel({
//     title:"Reflections on Apples",
//     content:"They are delicious"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });