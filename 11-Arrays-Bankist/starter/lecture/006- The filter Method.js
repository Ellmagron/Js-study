'use strict';

/*
    Filter
    Como o nome já diz, é um método que trata os dados, filtrando os do array orinal quando a condição desejada é retornada como verdadeira.  
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawal = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawal);

//Versão for of

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) deposits.push(mov);
}

console.log(deposits);
