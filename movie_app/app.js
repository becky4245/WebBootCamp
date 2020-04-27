var express=require("express");
var app=express();
var request=require("request");

app.get("/",function(rq,res)
{
 res.render("search.ejs");
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsedContent = JSON.parse(body);
        res.render("results.ejs", { data: parsedContent });
      }
    });
  });

app.listen(1234,function(){
  console.log("Movie app has started!!");
});

  