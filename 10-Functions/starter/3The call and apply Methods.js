const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a set on ${this.airLine}
    flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Jonas Smith');
console.log(lufthansa);

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

/*Palavra this em chamado de metodos regulares não funciona, função não vai ser tareatada como método de seu objeto, por conta disso a palavra this vai apontar para undefind*/
// book(23, 'Sarah williams');

/*
  Utilize o meotodo call para manualmente apontar a função para um objeto
*/
book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

/*Apply é um método antigo que faz o exatamo mesmo papel que o call, com a úncia diferença que ele não aceita uma lista de argumetnos e sim um array */

const flightdata = [583, 'George cooér'];
book.apply(swiss, flightdata);
console.log(swiss);
console.log(swiss);

// Não é se utiliza mais o método apply, por conta do call ser muito mais avançado e permitir utilizar o operador spread
book.call(swiss, ...flightdata);
