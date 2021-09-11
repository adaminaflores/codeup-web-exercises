"use strict";
// console.log("Hii");

// While Loop Exercise:
var i = 2;
while(i < 100000) {
    console.log(i);
    i *= 2;
}

// Do While Loop Exercise:
//60 cones
// random num between 1-5 is 4
//"5 cones sold" if there are enough cones
//"Cannot sell you 6 cones I only have 3" if there are not enough
//"Yay! I sold them all!" if there are no more cones
function iceCreamSeller(){
    var allCones= Math.floor(Math.random() * 51) + 50;
    var customerCones;

    do{
        customerCones = +prompt("Hi! there are" + allCones + "cones left. How many ice cream cones would you like?");
        if(isNaN(customerCones) || customerCones < 1) {
            alert("Sorry, That's not a valid answer!");
            continue;
        }
        if(customerCones > allCones){
            alert("Oh no! I don't have " + customerCones + "ice cream cones, I online have " + allCones + ".");
            continue;
        }
        allCones -= customerCones;
    } while(allCones > 0);
            alert("Yay! I sold all my Ice Cream!");
}

