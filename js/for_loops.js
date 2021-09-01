"use strict";
console.log("Hellloooo");
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for(var i = 1, j = i++; i<10; i++){
        console.log(num + "x" + j++ + "="  + (num * i));
    }
} showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

  for (var i=20; i<=200;i++) {

      if (i === 0) {
          console.log(i + " is even");
      } else if (i % 2 === 0) {
          console.log(i + " is even");
      } else if (i % 2 !== 0) {
          console.log(i + " is odd");
      } else {

      }
  }

//Create a for loop that uses console.log to create the output shown below

for(var i = 1, j = 0; i<10, j < i; i++, j++){
    var output = "";
    output = output + i.toString();
}

    console.log(output);



//Create a for loop that uses console.log to create the output shown below.

for(var i = 100; i>0; i -= 5){
    console.log(i);
}


