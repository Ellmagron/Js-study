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

/*
  Método bind
  Tem o mesmo próposito do call e apply, mas diferentes desses dois métodos, o bind retorna uma nova função já com a palavra this associada com o seu determinado objeto, então dessa forma não é necessário executar a chamada o método sempre que precisar da função, assim como acontece com call e napply.
*/
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

/* 
  Também é possivel realizar aplicação parcial utilizando o método bind.
  Aplciação parcial conciste em definir parte dos argumentos da função orignal no momneto da utilização do bind
*/

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Pedro araujo');

// Utilizando bind com addEventListener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

/*
  Quando é utilziado um métedo de um objeto em conjunto addEventListener que por usa vez esta associado a um elemento html, é necessário utuilizar o método bind, mesmo que o método esteja no proprio objeto, caso contrario a palavra this ira retornar o elemento html qye está associado ao addEventListener

*/
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Aplciação parcial 2

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

/*
  Por o método bind retornar uma função, nem sempre será necessário o uso da palavra this, por conta disso não precisa vincular a um objeto.
*/
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
