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
  const text2 = text
    .toLocaleLowerCase()
    .replace('  ', '')
    .replace(' ', '')
    .split('\n');

  const newText = [];
  let cont = 0;

  console.log(text2);

  for (const str of text2.values()) {
    newText.push(str.split('_'));
  }

  for (const [first, last] of newText.values()) {
    const final = `${first}${last[0].toUpperCase()}${last.slice(1)}`;
    cont++;
    console.log(`${final.padEnd(20, ' ')}${'✅'.repeat(cont)}`);
  }
});
//${'✅'.repeat(cont)}
