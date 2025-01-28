'use strict';

/*
    Usando método forEach em estruturas de dados sets, e maps.
*/

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

/*
    Por conta da estrutura sets não ter um indice para o seus valores, e o metodo forEach necessitar de 3 argunmentos, sendo um deles o indece. podemos então utilizar o _ para dizer que é um variavel ou argumento descartavel. 
    -
*/
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} ${value}`);
});
