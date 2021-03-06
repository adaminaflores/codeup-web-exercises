
"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?

// console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully
//TODO: add a method that runs if the Promise fails
//TODO: In the callback function of the .then method, parse the response into JSON
// pokemonAPI.then(function (results){
//     console.log(results);
//     results.json().then((resultsObj)=>console.log(resultsObj));
// }).catch(function(err){
//     console.log(err);
// })


//Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(function (results) {
//         console.log(results);
//         results.json()
//             .then((resultsObj)=>{return resultsObj.results})
//             .then((pokemon) => console.log(pokemon[0]));
//     }).catch(function (err) {
//     console.log(err);
// })
fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response)=>response.json())
    .then((jsonData)=>jsonData.results)
    .then((results)=> results.forEach((result)=>console.log(result.name)));


// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API
fetch('https://swapi.dev/api/films')


// TODO: Use Promise chaining to console log the json response
    .then((response)=>{
      return response.json();
    }).then((starWarsFilmData)=>{
        console.log(starWarsFilmData.results);
        starWarsFilmData.results.forEach((film)=>{console.log(film.title)})


})

// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race

