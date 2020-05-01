// ANOTHER WAY OF ASSOIATING DATA

var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postModel=require("./models/post");
var User=require("./models/user");
// to reference current directory e need ./



postModel.create({
    title: "How to cook ",
    content: "qwerty gibbersishhh"
}, function(err,post){
    User.findOne({email: "bob@gmail.com"},function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
});

// FIND USER 
//FIND ALL THE POSTS
// exec to execute the query
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// User.create({
//    email: "bob@gmail.com",
//    name : "Bob the builder" 
// });

