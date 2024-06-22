'use strict'


function cutFruitPieces(fruit){
    return fruit * 4
}

function fruitProcess(apple,orange){
    const applePieces = cutFruitPieces(apple)
    const orangePieces = cutFruitPieces(orange);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice
}


console.log(fruitProcess(2, 3))