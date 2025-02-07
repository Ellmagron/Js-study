'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Pedro Araujo',
  movements: [
    300, 230, 830, 1200, 90, 200, -200, 340, -300, -20, 50, 400, -460,
  ],
  interestRate: 1,
  pin: 5555,
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
    Método sort é utilizado para ordernar valores, mas ele considera strings para realizar esse ordenação.

    !Ele altera o array onde o método foi aplcaido.
*/

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());

//Return < 0 A, B, (keep order)
//Return > 0 B, A, (switch order)

//Order Ascending
movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

console.log(movements);
