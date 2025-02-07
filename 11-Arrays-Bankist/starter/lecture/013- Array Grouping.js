'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'deluxe',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const account5 = {
  owner: 'Pedro Araujo',
  movements: [
    300, 230, 830, 1200, 90, 200, -200, 340, -300, -20, 50, 400, -460,
  ],
  interestRate: 1,
  pin: 5555,
  type: 'premium',
};
const accounts = [account1, account2, account3, account4, account5];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'Withdrawals'
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount => 8) return 'very active';
  if (movementCount => 4) return 'active';
  if (movementCount => 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

const grupoAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(grupoAccounts);
