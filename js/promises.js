"use strict";

const headers = {
    Accept: promisesApiKey,
};

function lastCommitDate(username){
    return fetch(` https://api.github.com/users/${username}/events/public`,{
        headers
    }).then((eventRes) =>
        eventRes.json().then((eventJson)=>{
            console.log("event json", eventJson);

            if(!eventRes.ok) throw eventJson;

            const lastPush = eventJson.find((event)=> event.type === "push event");

            if(!lastPush) throw "could not find your last commit";

            return new Date (lastPush.created_at);
        })

    );
}
const people = [
    'adaminaflores'
];

for(const username of people){
    lastCommitDate(username)
        .then((date)=>{
            const formattedDate = date.toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
            });

        })
        .catch((err)=> console.error('',err));
}

// second part of exercise:

function wait(timeMs){
    return new Promise((resolve, reject)=>{
        if(typeof timeMs !== 'number')
            reject("these are not milliseconds");
        setTimeout(()=> resolve(timeMs), timeMs);
    })
}
wait(1000).then((timeMs)=>
    console.log(`you'll be able to see this after ${timeMs} milliseconds`)
);
wait(3000).then((timeMs)=>
    console.log(`you'll be able to see this after ${timeMs} milliseconds`)
);

wait('jklol')
    .then(()=>console.log("you can't see me"))
    .catch((err)=>console.error('error',err));