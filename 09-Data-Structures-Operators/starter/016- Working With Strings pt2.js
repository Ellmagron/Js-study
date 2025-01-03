const airline = 'TAP Air Portugal';

// Fix capitalization in name

const passenger = 'pEdrO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginemail = '  Hello@jonas.Io  \n';

const normalizedEmail = loginemail.toLocaleLowerCase().trim();

// Método trim remove os esmaços em branco de uma string

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Fazer 2 fiunção!

//Replace
/*Método replace o=como nome diz, subsittuir uma ocorrencia desejada por outra */
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcementv = 'All pass come the boaring door 23, Boarding door 23!';

// método replace substituir apenas occorrencia que aparece na astring
// replaceAll substituir todas as ocorrencia

console.log(announcementv.replaceAll('door', 'gate'));

// Expressões regulares eram utilizadas  antes do surgimento do replace all

console.log(announcementv.replace(/door/g, 'gate'));

//String também aceita método boolenas
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

if (plane.startsWith('AirBus') && plane.endsWith('neo')) {
  console.log('Part of the New ARirbus family');
}

// Exercise

const checkBaggage = function (item) {
  const baggage = item.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('Gun')) {
    console.log('You are NOT allowen on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have laptop, some food and pocket knife');
checkBaggage('Socks and cameta');
checkBaggage('Got some snacks and a gun for protection');
