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

//Existe uma segunda maneira de adicionar elementos a um MAP

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct '],
  [false, 'Try again!'],
]);
console.log(question);

//A a estrtura dos dados de um map é semelhante a entries de um objtect, portanto é possivel atribuir entries de um obj a um map
//Convertendo um objeto para um map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Maps são interaveis então podem ser percorrido utilizando for of, diferente de um objeto que necessite do método Object.entrie(nomeDoObjeto) para ser transformado em um interable

console.log('');
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3; //Number(prompt('Your answer'));

console.log(question.get(answer === question.get('correct')));

// É possivel converter map para objeto utilizando operador spread(...)

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
