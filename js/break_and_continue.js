"use strict";
// console.log("helloo");


var userInput = prompt("Pick and odd number between 1 and 50");
for (var i = 1; i <= 50; i++) {
    console.log(i++);
    if (i % 2 !== 0) {

        break;
    }
    console.log(i);
}

for (var j = 1; j <= 50; j++) {
    if (i % 2 === 0) {

        continue;
    }
    console.log("Here is an odd number : " + j++);

}
console.log("Yikes! Skipping number : " + userInput);
















