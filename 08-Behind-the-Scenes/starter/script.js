'use strict';
<<<<<<< HEAD
'use strict';

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
=======

function calcAge(birthYear) {
  function printAge() {
    const output = `${firstName}, you are ${age}, bor in ${birthYear}`;
>>>>>>> e9e48414453ed96d374547457a5976a328fd32fe
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
<<<<<<< HEAD
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
=======

      // Create NEW variable witg sane bane as outer scope's variable

      const firstName = 'Pedro';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `You're a millenial, ${firstName}`;
>>>>>>> e9e48414453ed96d374547457a5976a328fd32fe
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
<<<<<<< HEAD
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
=======

    console.log(millenial);
    add(2, 3);
>>>>>>> e9e48414453ed96d374547457a5976a328fd32fe
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
<<<<<<< HEAD
// console.log(age);
// printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
=======
>>>>>>> e9e48414453ed96d374547457a5976a328fd32fe
