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

const accounts = [account1, account2, account3, account4, account5];

// 1. Somando todas as movimentações
const bankDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((acc, value) => acc + value, 0);

console.log(bankDeposit);

// 2. Obtendo os valores acima de 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc >= 1000);
// console.log(numDeposits1000);

// Utilizando o método reduce para realizar o problema

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, value) => (value >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3. Criando um obejto usando o me´todo reduce

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, value) => {
      //   value >= 0 ? (sums.deposit += value) : (sums.withdrawals += value);
      sums[value > 0 ? 'deposit' : 'withdrawals'] += value; //Segunda maneira
      return sums;
    },
    { deposit: 0, withdrawals: 0 }
  );

console.log(sums);

//4. This is a nice title -> This is a Nice Title

const converteTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const execeptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      execeptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitzalize(titleCase);
};

console.log(converteTitleCase('this is a nice title'));
console.log(converteTitleCase('this is a LONG title but not too long'));
console.log(converteTitleCase('and here is another title with an EXAMPLE'));
