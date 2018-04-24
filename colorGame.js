var colors = ["rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 225)",
"rgb(255, 0, 255)" ];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i]; 

    squares[i].addEventListener("click", function(){
        var clickedColor =this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Try Again";
            messageDisplay.textContent = "Correct";
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
