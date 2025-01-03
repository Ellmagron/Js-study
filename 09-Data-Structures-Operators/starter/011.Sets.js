'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//3) É possivel computador(calcular) nomes de propriedade dentro de um objeto
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhances object literals
  //1) Caso seja necessário aplicar um objeto dentro de outro não é mais necessário criar um método e atribuir valor a ele.
  openingHours,

  //2) Não é mais necessário declarar a palavra function para defenir um método em um objeto
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is yout delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Utilizando operador rest para passar arbitráriamente
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
    Java script recebeu 2 novas estrututras de dados embutidas

    set e maps
*/

// Sets é uma estrutura de dados que seus valores nãoo se repetem

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

// Sets também tão interaveis
console.log(new Set('Pedro'));

console.log(new Set('Bread'));

//Adicionando elementos em um Set
orderSet.add('Galartic Bread');
orderSet.add('Galartic Bread');

//Removendo elementos do Set
orderSet.delete('Galartic Bread');

for (const order of orderSet) console.log(order);

/*
    Set não devolve a posição de um elemento igual um array, caso necessite disso utilize array
    Sets são uteis para quando você necessita retirar elementos repetidos de um array.
*/

// Example  utilizando oerador spread
const staff = ['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter'];
const staffUnique = [...new Set(staff)];
('');
console.log(staffUnique);

//Maneira alternative de  obter o tamnho de um set

console.log(
  new Set(['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter']).size
);

//Set também aceita itareveis, então é possivel utilizar strings

console.log(new Set('pedro araujo').size);
