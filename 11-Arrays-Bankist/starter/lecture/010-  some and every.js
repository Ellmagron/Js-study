const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

/*
    Método Some.
    É diferente do includes, não apenas usa === para retornar um valor, mas também possui uma função callback, onde é epossivel utizar lóficas um poucos amais complexas
*/

//Equality
console.log(movements.includes(-130));

//Condição
console.log(movements.some(mov => mov === -130));

//SOME: conditiom
const anyDeposits = movements.some(mov => mov => 0);
console.log(anyDeposits);

/*
    Semelhante oa método some, mas apenas retorna true se todos os valores satisfazer a condição, então caso um sej falso, o resultado geral será falso.
*/

console.log(
  movements.every(function (mov) {
    mov > 0;
  })
);

console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
