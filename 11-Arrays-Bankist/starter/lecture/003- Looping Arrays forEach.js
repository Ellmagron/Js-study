/*
    Método ForEach também é um laço de repetição, assim como o método for of, mas como um diferença fundamental.
    - Método forEach utiliza funções callback
    - Não é possivel interromper o método forEach com as declrações continue ou breakk
    - ForAch por natureza já recebe 3 argumentos que é o valor, index, e o prórpio array onde está sendo     chamado o ForEach.
    
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--------FOREACH--------');

movements.forEach(function (movement, index, array) {
  // Os argumento sempre deve seguir a mesma ordem, valor, index, array
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
