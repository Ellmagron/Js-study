"use strict";

console.log(23 === 23.0);

/*
    Base 10 - 0 to 9
   
    Binary base 2 - 0 1

    O Java Script tem certa dificuldade em representar certos valores base 2
    tal como
*/

console.log(0.1 + 0.2);
console.log(0.1 + -0.2 === 3);

/*Conversion*/
console.log(Number("23"));
console.log(+"23", 10); // Utilizar o sinal de + na frente de um número é uma segunda forma de converter um números tring em  number

/*Conversion*/
console.log(Number("30x", 10));
console.log(Number("e23", 10));

console.log(parseInt("2.5 Rem"));
console.log(parseInt("2.5"));

console.log(parseFloat("2.5 rem"));

// Check if Value NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(23 / 0));

// Checking value is Number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20x"));
console.log(Number.isFinite(23 / 0));

//Che if value is a Interger

console.log(Number(Number.isInteger(23)));
console.log(Number(Number.isInteger(23.0)));
console.log();
