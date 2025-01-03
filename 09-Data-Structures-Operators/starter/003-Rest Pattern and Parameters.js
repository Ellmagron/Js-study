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

//Spread, porque está do lado direto do sinal =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//Rest, porque está do lado esquerdo do seinal =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Extraindo objetos do menu usando destrututração

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Utilizando o operador rest em Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

//Utilizando o operador rest em funções
//Operador rest permite utilizar uma quantidade arbitraria de parametros, não precisa ser algo fixo

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//Usando o operador spread junto coma função com o operador rest

//Criando uma função com n valores
const x = [23, 5, 7];

//Utilizando o operador spread
add(...x);

restaurant.orderPizza('Mussarela', 'calabresa', 'Molho');
restaurant.orderPizza('Mussarela', 'Presunto');

//Resumo
/*Operador rest e spread são similares, mas funcionam de maneira opostas. Depende de onde é utilizado.*
Spread: É utilizando qunado queremos valores individuais separado por vigurla
*/
const food = ['Pão', 'Presunto'];

console.log(food);
/*
Rest: É utilizado quando queremos variaveis individuais separado por virugla  
 */
const [simpleDrink, ...allDrink] = [
  'Suco',
  'Refrigerante',
  'Suco de maracuja',
  'Vitamina de banana com morango e aveia',
];

console.log(simpleDrink, allDrink);
