"use strict";
// console.log("Hello from External Javascript");
//
// alert("Welcome to my Website");
//
// var userInput = prompt("Hey, what is your favorite color?");
// alert('My favorite color is also:'+ userInput);

//If price for a movie per day is $3, how much will you have to pay?
var movieRental = prompt("How many days would you like to rent this movie?");
alert("For this many days it will cost" + movieRental*3);

//How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var workWeek = prompt("How many hours did you work this week?");
var gRate = parseInt(400 * 6);
var aRate = parseInt(380 * 4);
var fRate = parseInt(350 * 10);
var total = (gRate + aRate + fRate);
alert("This is how much you will receive this week:" + total);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule

var notFull = confirm("Is the class you want to attend full?");
var classSchedule = confirm("Does this class conflict with your current schedule?");
alert("You can join this class a " + !notFull && !classSchedule + "statement");



//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products
var productOffer = confirm("Is this offer still valid?");
var nonMember = parseInt(prompt("How many items do you have?"));
var premiumMember = parseInt(prompt("Are you a member?"));
alert("This offer is valid :" + !nonMember && !premiumMember);


