'use strict';

/*
  Closures não é um feature que é possivel ser criada em Java script, é mais um comportamento da linguagem e que devmos aprender reconhecer.


  Closures é o comportamento que se dá quando um função  com uma variavel de ambiente é atribuinda 
  a uma varivael no escopo global, e ainda sim ser acessivel, mesmo a principio ela não devesse exisitr já que terminou sua execução.
*/

const secureBooking = function () {
  // Função
  let passengerCount = 0; // variavel de ambiente

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

/*
  Closures permitira que  uma função tenha acesso a variavel de ambiente de sua função pai no momento que ela é declarada.
*/
const booker = secureBooking();
