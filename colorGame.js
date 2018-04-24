var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate all new colors
colors = generateRandomColors(6);
    //pick random color afrom array
pickedColor= pickColor();
colorDisplay.textContent = pickedColor;
for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor= "black";
})

for (var i=0; i<squares.length; i++){   
    squares[i].style.backgroundColor = colors[i]; 

    squares[i].addEventListener("click", function(){
        var clickedColor =this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Try Again";
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = clickedColor;
            changedColors(clickedColor);
        }else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
        }
    })
}
function changedColors(color){
    for(var i=0; i<squares.length;i++){
squares[i].style.backgroundColor = color;
    }

    }
function pickColor(){
    var random = Math.floor(Math.random()* colors.length) ; 
    return colors[random];
}
function generateRandomColors(num){
var arr = [];
for(var i=0;i<num;i++){
arr.push(randomColor());
}
return arr;
}  
function randomColor(){
var r = Math.floor(Math.random()* 256);
var g = Math.floor(Math.random()* 256);
var b = Math.floor(Math.random()* 256);
return "rgb("+r+", "+g+", "+b+")";
}
