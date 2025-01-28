'use strict';

/*
    Reduce
     Dififerente dos 2 métodos anteriores, esse é um método que reduz, como o nome já diz, um array em um único valor, assim somando todos os valores do array em um variavel e retornando um único valor e não um array, como acontece nos métodos map e filter. 


     Método reduce, diferente do map e filter, possui 4 parametros, invez de apenas3, e esse a novo parametro é justamente  a variavel que que vaia acumular todo os valores executados na função, e no final, nomometo que fechar a chaves, deve se utilizar um valor, que é qual vai ser p estado inicial do argumento acumulador. 
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, value, indice, arry) {
//   console.log(`Interation ${indice}: ${acc}`);
//   return acc + value;
// }, 0);

const balance = movements.reduce((acc, value) => acc + value, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

console.log(movements);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);

console.log(max);
