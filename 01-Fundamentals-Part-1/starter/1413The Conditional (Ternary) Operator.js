//Operador condiconal ou operador ternaário. É um operador com 3 partes diferetes dos operadores artiméticos que tem apenas 2 partes, mas assim como operador artimétimeticos o operador ternários também é um expressão, sendo assim produzindo um valor.

const age = 23;

age >= 18;
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");
// console.log(drink)

// Sendo uma expressão operador condicional pode ser armazenado diretamente dentro de uma variavel, sem ter que se preocupar com o escopo de bloco igual na instrução if/else

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

//If/else
let drink2;

if (age >= 18) {
  drink2 = "wine 🍷 ";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

// Operador ternário também é uma ótima alternativa para se utlizar dentro de um string interpolada.

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
