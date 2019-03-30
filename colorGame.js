
// Original list of colors assigned until the function to generate random colors was created.
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ];

// Now we define colors again, but now to randomly genenerate the number of colors to display
var colors = generateRandomColors(6);   // we define colors and then we go and create the function(s)
let squares = document.querySelectorAll(".square");
// console.log(squares);
let pickedColor = pickColor();  //pickColor() is the function that randomly assigns whatever the color will be
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");// we create a variable called messageDisplay; it allows me to call on it later; will do when the user guesses wrong.
colorDisplay.textContent = pickedColor;


// ADD EVENT LISTENERS
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // adding the initial colors to squares
    squares[i].addEventListener("click", function () { // adding an EventListener, an click listener to the squares
        // alert("clicked a square"); 
        var clickedColor = this.style.backgroundColor; // Select the color of the clicked square; ('THIS' refers to the item we clicked on, the actual square.)
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) { // Compare the color clicked to the picked Color to guess
            messageDisplay.textContent = "Correct. Excellent Job!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#151515"; // if the user clicks one of the wrong ones, the color will fade into the background, thus disappearing. 
            messageDisplay.textContent = "Don't give up! Try Again"; // and show the user a message in a <span> tag 
        }
    });
}

function changeColors(color) {// once the player selects the correct color, we need to loop through all squares and change each clor to match the given color
    for (var i = 0; i < squares.length; i++) { //loop through squares:
        squares[i].style.backgroundColor = color; // change each square, 'i' to match given color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length); //randomly select a color from our array and assign it to the color to guess;
    return colors[random]; // return colorsArray and give us this random number that identifies the color in the colorsArray
}

function generateRandomColors(num) { //this will return only ONE color so we need to create another function to call on it mult times
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor()); // push the randomColor in the array and continue the loop
    }
    return arr;
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + "" + ", " + b + ")";
};