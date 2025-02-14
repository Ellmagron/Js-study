'use strict';

/*
    Map
    Muito semelhante ao ForEach com a grande diferença que já retorna um novo array com os dados tratados da maneira desejada.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (value) {
//   return value * eurToUsd;
// });

//Versão arrow
const movementsUSD = movements.map(value => value * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const value of movements) movementsUSDFor.push(value);

console.log(movementsUSD);

/*
Esse tipo de programção faz parte de um dos paradigmas da programação chamda programação funcional.

*/
const movementsDescription = movements.map(
  /*Não cria efeitos secundários. */
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited +' : 'Withdrew -'}${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);
