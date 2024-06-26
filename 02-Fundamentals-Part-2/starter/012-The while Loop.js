'use strict'


// let rep = 1;

// while (rep <= 10){
//     console.log(`WHILE: Lifting wights repetition ${rep} - 😀`);
//     rep++
// }

let dice = Math.trunc(Math.random() * 6 ) + 1;

while(dice !== 6){
    console.log(`You rolled a dice ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`)
}

