"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     var message;
//     if(color === 'blue') {
//         message("Blue is the color of the sky");
//
//     }else if(color === 'red') {
//         message("Apples are red");
//     } else if( color === 'cyan'){
//             message("I don't even know what that color looks like");
//     }
// }



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor);
console.log(analyzeColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    var message;
    switch(color){
        case "blue":
            message = "Blue is the color of the sky";
            break;
        case "red":
            message = "Red is the color of an apple";
            break;
        case "cyan":
            message = "I don't even know what that color looks like"
            break;
        default:
            message = "That's my favorite color";
            break;
    }
    return message;

}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?");
var result = analyzeColor(userColor);
alert(result);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(number, totalAmount){
    var price;
    switch(number){
        case 0:
            price = totalAmount;
            break;
        case 1:
            price = totalAmount * .1;
            break;
        case 2:
            price = totalAmount * .25;
            break;
        case 3:
            price = totalAmount * .35;
            break;
        case 4:
            price = totalAmount * .50;
            break;
        case 5:
            price = 0;
            break;
    }
    return price;
}

console.log(5,100);



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("What was your bill total?");
var pay = calculateTotal(luckyNumber, totalBill);
alert("This was your lucky number " + luckyNumber);
alert("The price before your discount was " + totalBill);
alert("Yay! You're new total after your discount is " + pay);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var isEnter = confirm("Hey! Would you like to pick a number");
    if(isEnter === true){
        var userNumber = prompt("Pick a number, any number!");
    if(isNaN(userNumber)=== true){
        alert("Um, that isn't even a number");
    } else {
        if(userNumber % 2 === 0){
         alert("This is an even number!");
        } else {
          alert("This is an odd number");
        }
    }
    }
