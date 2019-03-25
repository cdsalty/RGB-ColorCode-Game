// alert("B00");
/*

We first need to setup javascript to make each one of our boxes is a diferrent color. 
   1. We just want to start with assigning all the boxes a color. We start by creating each colors.
        - select all six of the squares and loop through them and assign them one of the rgb options for the variable, "color"

   2. We then want to focus on coloring each box and using the random method.
*/
// console.log("sanity check")
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

/* 
Loop Through and assign a color to each square
    - making use of working with the DOM
*/

let squares = document.querySelectorAll(".square");
console.log(squares);
// let pickedColor = colors[3];
let pickedColor = pickColor();  //pickColor() is the function that randomly assigns whatever the color will be
let colorDisplay = document.getElementById("colorDisplay");

// we create a variable called messageDisplay; it allows me to call on it later; will do when the user guesses wrong.
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

// add EventListeners 
for (var i = 0; i < squares.length; i++){  
    // adding the initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // adding an EventListener, an click listener to the squares
    squares[i].addEventListener("click", function (){ 
    // alert("clicked a square"); 
    // Select the color of the clicked square; ('THIS' refers to the item we clicked on, the actual square.)
    // alert(this.style.backgroundColor);  // Since I am using, "this", I had to change my 'arrow' function to standard anonoyomous function
        var clickedColor=this.style.backgroundColor;
        // Then compare it to the pickedColor through an if statement
        if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct. Excellent Job!";
        changeColors(clickedColor);
        } else {
            // if the user clicks one of the wrong ones, the color will fade into the background, thus disappearing. 
            this.style.backgroundColor = "#151515";
            // and the user will show a message in the <span> tag 
            messageDisplay.textContent = "Don't give up! Try Again";
        }
    });
    // console.dir(squares[i]);
    // console.log(colors[i]);
}


// Now, once the player selects the correct color, we need to loop through all squares and change each clor to match the given color
function changeColors(color){
//loop through squares:
for(var i = 0; i < squares.length; i++){
    //now change each color to match given color
    squares[i].style.backgroundColor = color;
    // AFTER creating this function, we then have to call on it above when the user clicks the Correct, pickedColor.
    }
}
function pickColor(){
    // first, randomly select a color from our array and assign it to a varaiable;
    var random = Math.floor(Math.random() * colors.length);
    // now, we return the number associated with the colors array that was returned.
    return colors[random];
    // return colorsArray[and give us this random number that identifies the color in the colorsArray]
}
