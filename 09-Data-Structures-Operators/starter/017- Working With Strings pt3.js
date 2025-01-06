//Métodos split join

/*
    Split, divide um string com base em uma string
    join, uni uma string com base em uma string    
*/

console.log('A+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('Jessica ann smith davis');
capitalizeName('Pedro henrique ferreira araujo');

//padding
/*
  É um método que tem a função de adicionar caracter no ínicio ou fim de uma string de acordo com ota manho desejado

  padStart(20, '*')
  1 - primeiro parametro determina o tamnho que você quer que a string tenha~
  2 - segundo parametro o caracter a ser adicionado 
*/

const message = 'Go to gate 23';
console.log(message.padStart(20, '*'));

console.log('pedro'.padEnd(10, '%'));

const maskCreditCard = function (number) {
  const st = number + '';
  const last = st.slice(-4);

  return last.padStart(8, '*');
};

console.log(maskCreditCard(123456789123));
console.log(maskCreditCard(9874566546789));

//Repeat

const message2 = 'bad weather... all Departures delayed... ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
