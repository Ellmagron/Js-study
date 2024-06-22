"use strict"



function log() {
  console.log("My name is Pedro")
}


log()


function fruitProcess(apple, orange){
    console.log(apple, orange)
    const juice = `Juice with ${apple} apple and ${orange} orange`
    return juice;
}


const appleJuice = fruitProcess(5, 0)
console.log(appleJuice)


console.log(fruitProcess(3, 2));


