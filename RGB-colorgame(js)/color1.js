// alert ("connected");
var colors=generateRandomColors(6);



    // "rgb(255, 0, 0)",
    // "rgb(255, 255, 0)",
    // "rgb(0, 255, 0)",
    // "rgb(0, 255, 255)",
    // "rgb(0, 0, 255)",
    // "rgb(255, 0, 255)", 


var squares= document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDis=document.getElementById("colorDisplay");
var messageDis=document.querySelector("#message");
var h1=document.querySelector("h1");

colorDis.textContent=pickedColor;


for(var i=0;i<squares.length;i++)
// add initail colors to square
{
    squares[i].style.backgroundColor=colors[i];
    //add click listeners to squares. 
    squares[i].addEventListener("click",function()
    {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor; 
        // compare color to pickedColor
        if(clickedColor === pickedColor)
        {
            messageDis.textContent="Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDis.textContent="Try again";
        }
    });
}

function changeColors(color)
{
    // to loop through all squares.
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }

}

function pickColor()
{
  var random= Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num)
{
    //make an array
    //add num random colors to aaray
    //return that array
      var arr=[];
      for(var i=0;i<num;i++)
      {
          //get random clor and push into aaray
           arr.push(randomColor());
      }
       return arr;
}

function randomColor()
{
    
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    //"rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}