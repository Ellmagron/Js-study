// Equality Operators: == vs. ===

const age = "18";

/*
Igualdade restrita vs igualdade  flexivel
*/

// Igualdade restrita(===) não executa type coercion, então JS não ira converter um tipo para o outro ele apenanas compara se os 2 valores são de fato iguais
if (age === 18) console.log("You just became an adult :D (strinct)");

// Igualdade flexivel (==) JS executa o type coercion para que a string '18' seja um número igual o 18
if (age == "18") {
  console.log("You just became an adult :D (loose)");
}

const verif = age == 18;
console.log(verif);

/*Qual utilziar ? 
Igualdade restrita (===) É a mais aconselhava, pq previni BUG dentro do código, se for necessário fazer uma conversão de tipo para depois fazer uma comparação, faça isso manualmente. 

*/

const favourite = Number(prompt("What's you favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
