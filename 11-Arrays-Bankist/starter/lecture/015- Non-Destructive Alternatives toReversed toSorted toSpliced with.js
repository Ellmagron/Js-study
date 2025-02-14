'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
    Java script possui métodos que não destruitiveis, ou melhor dizendo, mpétodos que não alteram o array orinal
    */

//Exemplo com o método reverse
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

// O mesmo vale para o toSorted(Sorted), toSplited (splcie)

//Também existe uma forma de atualizar valores dentro de um array, sem alterar o original;

const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);
