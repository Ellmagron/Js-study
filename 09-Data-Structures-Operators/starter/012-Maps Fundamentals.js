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
    Maps é uma estrutura de dados não tem relação com uma ferramente de geolocalização como GPS ou uma cartografia de um mapa.
    
   maps assim como objetos armazenam um par chave valor, mas com um grande diferencial que são as chaves que podem ser de qualquer tipo.
   enquanto que nos objetos as chaves são apenas strings, maps podem ser number, array, string e até bool.
*/

//Exemplo

//Método set para adicionar valor a um map é o mesmo utilizado na estrututra de dados set
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, portugal'));

//Metodo set retonar o método atualizado com o valor adicionado, então é possivel suar em cadeia varios métodos sets seguindos
//Exemplo
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//Para recuperar um chave valor de um map é usado o metodo get
//Exemplo

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//Exemplo pratico

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Outros métodos

console.log(rest.has('categories'));
rest.delete(2);
//Limpando um map
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
