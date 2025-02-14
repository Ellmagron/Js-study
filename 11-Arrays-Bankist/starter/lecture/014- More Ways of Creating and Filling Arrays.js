'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Emprty arrays + fill method

const x = new Array(7);
console.log(x);

x.fill(1, 2, 3);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y);

const dice = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

console.log(dice);

console.log(accounts);

//Covnertendo um Node list para array

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    //NodeList não é um array, ams tem uma estrutura igual de um array. E então pode ser convertido para um array usando o construtor Array.from()
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);
});

/*
    Um objeto iterável é qualquer objeto em JavaScript que implementa o protocolo de iteração, ou seja, ele pode ser percorrido (iterado) usando um loop, como for...of, ou convertido em um array usando métodos como Array.from() ou o operador spread (...).
*/
