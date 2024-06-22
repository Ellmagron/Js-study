'use strict'
const friends = ['Michael', 'Steven', 'Peter', 'Jay'];

//Adiciona elementos na última posição
const newLength = friends.push('jay') // <-- Retorna o compirmento do vetor
console.log(friends);
console.log(newLength);


//Adiciona elementos no ínicio no vetor
friends.unshift('John')
console.log(friends)


//Remove o últimp elemento do vetor
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);


//Remove o primeiro elemento do vetor
friends.shift(); // first
console.log(friends)


//Captura o posição(indice) do elemento do veotr

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));


//Maneira mais moderna
//Include é um mpetodo que retorna booleano.  Ele faz igualdade restrita. 
friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven ");
}







