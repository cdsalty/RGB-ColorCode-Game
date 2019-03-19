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
To Loop Through and assign a color to each square
    - making use of working with the DOM
*/

let squares = document.querySelectorAll(".square");
console.log(squares);
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");
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
        alert("correct!");
        } else {
            alert("wrong choice");
        }
    });
    // console.dir(squares[i]);
    // console.log(colors[i]);
}