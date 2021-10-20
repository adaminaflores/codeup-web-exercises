"use strict";

console.log("Hello Restful API");


const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs';
//Getting all the dogs.

function getDogs(){
    return fetch(API_URL)
        .then((response) => response.json());
}
//getDogs().then((dogs)=>console.log(dogs))

//Get a individual dog by ID.

function getDog(id) {
    return fetch(`${API_URL}/${id}`)
    .then((response) => response.json)
}

//getDog(11).then((dog)=>console.log(dog))


//Edit a dog by ID.

function editDog(dog) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)
    }
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response) => response.json())
}
let piper = {
    name: 'Piper',
    isGoodDog: true,
    id:11,
    age: 8
};
editDog(piper).then((data)=>console.log(data))


