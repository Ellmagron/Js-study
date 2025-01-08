// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const newStr = text.toLocaleLowerCase().split('\n');

  for (const [index, string] of newStr.entries()) {
    const [first, last] = string.trim().split('_');
    const output = `${first}${last[0].toLocaleUpperCase()}${last.slice(1)}`;

    console.log(`${output.padEnd(20)} ${'✅'.repeat(index + 1)}`);
  }
});
