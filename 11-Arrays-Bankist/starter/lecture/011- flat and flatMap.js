'use strict';

/*Flat: é usado para "achatar" ou "nivelar" vetores que são aninhados 
    Ex:  vetor 1 [[10, 20], [30,40]]*/

const vetor = [
  [10, 20],
  [30, 40],
];

console.log(vetor.flat());

//Por padrão ele faz o nivelamento de vetores aninhados de até 1 nivel de profunidade, mas é possivel fazer mais passando o numero da produnidade como argumento
const vetorDeepth = [[100, [10], [30, [50]]]];
console.log(vetorDeepth.flat(3));

// nivelando(flat) movimentação geral de todas as contas de usuario
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

const accounts = [account1, account2, account3, account4];

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

/*Flatmap, é uma combinação tanto do método map e flat, essas combinação é muito util por questões de performance
    - Ponto negativo é que o flatMap, é capaz apenas de ir 1 nivel de produndidade em estruturas aninhadas
    */

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
