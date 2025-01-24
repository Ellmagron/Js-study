'use strict';

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.log(f);

// Re-assigning f function
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passenfers`);
    console.log(`The are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

//Closures tem priridade na caide de scopo

/*
    Se existir a mesma variavel tanto no escopo global quanto no scopo de uma função. o clouseres dara prioridade a variavel do ambiente da função
*/

const perGroup = 1000;
boardPassengers(180, 3);
