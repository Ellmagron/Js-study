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

//Destruturação de dados de um array simples

/*
    1- Maneira convencional  
        Obtendo o index individualmente de cada elemento presente em um array*/

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destruturação de dadaos de uma forma mais moderna
/* Sempre que você declarar um "vetor" do lado esquerdo do sinal de = ele vai desenpacotar os dados presente no array no lado direito do sinal de =
 */
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

// Obtando valores que estão presente no ínicio e no final de um array
//Para fazer isso basta adicionar uma virgula(,) nos dados que não são necessãrios

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

//Trocando valores entre variaveis.

// 1- Maneira convencional é utilizar um variavel temporaria para armazenar o valor de uma variavel

// const temp = main;
// main = secondary;
// secondary = temp;

// 2- Maneira moderna

[main, secondary] = [secondary, main];

console.log(main, secondary);

//Recebendo 2 valores de uma função
const [starter, mainFood] = restaurant.order(2, 0);
console.log(starter, mainFood);

//Realizando destrututração de dados em array aninhados

const nest = [2, 4, [5, 6]];
// const [i, , j] = nest;
// console.log(i, j);
//Destruturação dentro de um destruturação

const [i, , [j, k]] = nest;

console.log(i, j, k);

//Valores padrão
// É útil definir valores padrão para uma variavel, para caso de não conhecer exatamente o tamnho dos dados com qual nós estamos tamanho.
