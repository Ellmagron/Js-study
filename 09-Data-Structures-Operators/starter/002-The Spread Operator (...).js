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

//Operador spread (...)
// Esse operador é útil para quando queremos retirar todos os valores de array

const arr = [7, 8, 9];

// 1- Maneira de copiar um novo array e adicionar novos elementos no ínicio.
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArray);

// 2- Utilizando o operador spread

const newArr = [1, 2, ...arr];

//Registrando no log
console.log(newArr);

//Criando um novo menu com base em um objeto existente
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//A diferença do operador spread e destruturação de dados

// Destruturação de dados cria variavel para cada elemento do vetor enquanto o operador spread(...) apenas pega todos os elementos do array e não cria variavel

//Copiando um array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

//  What is Iterables?  arrays, string, maps or sets. NOT objects
//  Onde posso utilizar o operador Spread? Somente quando construimos um arry ou quando passamos valores para uma function

//Usando operador spread(..) em string

const str = 'Pedro';
const letters = [...str, 's.']; //A maneira de se usar o operador ... em string é igual quando se utilizar em array
console.log(...letters);
console.log('p', 'e'); // operador ... não funciona com string interpolada ``

const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Let's make pasta! Ingredient 2?"),
  //   prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Copiando um objeto
const newRestaurant = { foudedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
