'use strict';

// Strings assim como vetores também possuem métodos.

const airline = 'TAP Air Portugal';
const plane = 'A320';

//Strings tem comportamento de vetores, então é possivel obter cada letra individualmente
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

//Maneira direta usando a p´ropria string
console.log('B737'[0]);

//Obtendo comprimento de uma astring
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

//Metodo slice é util quando precisamos extrair parte de uma string sendo uma letra ou palavra
// Metodo slice, com no idexof utilizado como parametro
console.log(airline.slice(4)); // primeiro parametro é onde o slice  vai se inciar
console.log(airline.slice(4, 7)); // Segundo parametro é onde o slice vai terminar
//* método slice sempre vai parar um número antes do valor do index final

// Como obter uma palavra  deentro de uma astring
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucy ');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/*
        Strings é um tipo primitivo. Como ele tem métodos iguais a objetos e vetores ?
    
        1- Sempre que um método é chamado em uma string, java script nos bastidores converte a string para um objeto com o mesmo conteudo, e então é nesse objeto que o método pé aplicado.
        Nome desse processo é boxing, por que é processo do js pegar uma string e colcoar dentro de uma caixa(boxing) que é um objeto
*/

// Processo
console.log(new String('Pedro')); //<- transformando string em objeto
console.log(typeof new String('Pedro'));
console.log(typeof new String('Pedro'.slice)); //Objeto voltando a ser string
