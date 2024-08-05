'use strict';

function calcAge(birthYear) {
  function printAge() {
    const output = `${firstName}, you are ${age}, bor in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Create NEW variable witg sane bane as outer scope's variable

      const firstName = 'Pedro';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `You're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    add(2, 3);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
