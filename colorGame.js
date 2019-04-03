
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
let colors = generateRandomColors(6);   // Create a variable, called  'colors' and assigns it an/the array of the random generated colors.
let squares = document.querySelectorAll(".square");
// console.log(squares);
let pickedColor = pickColor();  //pickColor() is the function that randomly assigns whatever the color will be guessed
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");// we create a variable called messageDisplay; it allows me to call on it later; will do when the user guesses wrong.
let h1 = document.querySelector("h1"); //created to reference when the correct color is selcted, the background of the h1 will match
let resetButton = document.querySelector(".reset"); //to call on and define what happens when user selects reset button

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    // alert("sanity check");
    //Generate all new colors in the squares
    colors = generateRandomColors(6);           // generates a random list of new colors in the boxes
    pickedColor = pickColor();                  // picks a new random color from the array to guess
    colorDisplay.textContent = pickedColor;     // change our colorDisplay to match the picked Color
    for (let i = 0; i < squares.length; i++){   // to change the colors of the squares, we just need to call on the loop we already created.
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "palevioletred";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // adding the initial colors to squares
    squares[i].addEventListener("click", function () { // adding an EventListener, an click listener to the squares
        // alert("clicked a square"); 
        var clickedColor = this.style.backgroundColor; // Select the color of the clicked square; ('THIS' refers to the item we clicked on, the actual square.)
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) { // Compare the color clicked to the picked Color to guess
            messageDisplay.textContent = "Correct. Excellent Job!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
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