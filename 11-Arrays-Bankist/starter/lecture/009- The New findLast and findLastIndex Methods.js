'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
    2023, surgiu 2 novos métodos
    findlast, findLastIndex - Possui o mesmo próposito do find, findIndex com a única diferença que começa de trás para frente
*/

console.log(movements);

const lastWithdrawal = movements.findLast(mov => Math.abs(mov) > 1000);

const largeWithdrawal = movements.findLastIndex(mov => mov > 0);
console.log(
  `'Your lasted  large movement was ${
    movements.length - largeWithdrawal
  } movements ago'`
);
