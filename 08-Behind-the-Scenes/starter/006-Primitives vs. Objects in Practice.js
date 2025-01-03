'Use strict';

//Primitive types

let lastName = 'Williams';
let oldName = lastName;

lastName = 'Davis';

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis'; // Ao fazer isso você vai estar alterando o valor do endereço que está sendo referenciado no call stack, e não criando um novo endereço com um novo valor.
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //Dessa forma o objeto está sendo copiado e um novo objeto sendo criado no heap, e não apenas sendo referenciado. Mas esse método somente funciona com objetos não aninhados.
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary'); //Propriedade family é um array que é um objeto aninhado, então quando ele for copiado ele não sera criado novamente no heap, apenas sera referenciado para o jessicaCopy.
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
