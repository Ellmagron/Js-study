'use strict';

const booking = [];

//Definindo valores padrão para parametros de uma funçao
//É possivel realizar expressões matematicas entre os parametros
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /*
        // Definindo valor padrão para um parametro no ES5
        numPassengers = numPassengers || 1;
        price =  price || 199 
    */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

//Caso deseje pular a passagfem de um argumento, utilize o undefined
createBooking('LH123', undefined, 1000);
