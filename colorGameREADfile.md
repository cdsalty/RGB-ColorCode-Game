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
let squares = document.querySelectorAll(".square");   //get all six squares together and assign to squares so we can loop through later
console.log(squares);
// Hard Index the Picked Color to Match (will randomize later)
let pickedColor = colors[3];
// Now, we need to update the page to display what color we are suppose to guess. define a variable called 'colorDisplay'
let colorDisplay = document.getElementById("colorDisplay");
// set the colorDisplay to text conent and assign it to pickedColor; (updated colorDisplay show it shows what color we have picked.)
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){    // 6 squares, loop through and the first will get the background of color[0] and so on...
    // add inital colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add Click Event Listners to the Squares
    squares[i].addEventListener("click", ()=>{ 
        alert("clicked a square");  // Each time you click a square, you get an alert that a square was picked.
        });
    console.dir(squares[i]);
    console.log(colors[i]);
}
