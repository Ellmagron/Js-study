'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is yout delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Utilizando operador rest para passar arbitráriamente
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log('---- OR ----');
// Uso Qualuqer tipo de dado, retorna qualquer tipo de dado, short-circuiting

//Operador OR retorna o primeiro valor verdadeiro, mas caso os 2 sejam, eles retornam o segundo.
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hwllo' || 23);

// restaurant.numGuest = 23
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;

console.log(guests1);

const guests2 = restaurant.numGuest || 10;
console.log(guests2);

//Operador AND funciona de maneira oposta, retornando o primeiro valor falso, ams caso os 2 sejam verdadeiros ele retorna o segundo valor
console.log('---- AND ----');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

//Exemplo pratico
//Utilizando declração if para verificar se um método existe.
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

//Utilizando operador AND
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//! Não substitua todoas declaração if por operador  OR ou AND, pode tornar o código de ser lido no futuro ou por outras pessoas.

//Remuso

/*Resumo
OR - Retorna o primeiro valor verdadeiro de todos os valores, ou último valor caso todos sejam falso
AND - Retorna o primeiro valor falso de todos os valotes, ou último valor caso todos sejam verdadeiros
*/

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

//Operador de Operador de coalescência nula trabalah com operador Nulos e não falsos.
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

console.log(rest1);
console.log(rest2);

//Operadores logicos de atribuição
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest1.numGuest ??= 10;

rest1.numGuest = rest1.owner && '<ANONYMOUS>';
rest2.numGuest = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
