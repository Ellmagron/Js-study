const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flight, passenger) {
  /*
    !!Não é uma boa pratica alterar o valor de um parametro
  // O valor de uma parametro alterado dentro de funcition não é refletido em sua variavel original
    */
  flight = 'LH999';

  passenger.name = 'Mr. ' + passenger.name;
  /*
        // Valor de alteradas de um parametro que é um obejto, sim são refletidas em seu objeto que está fora da função, isso porque o parametro é umreferencia do objeto e não uma copia. 
  */

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }

  console.log(flight);
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

/*
    Na programação existe 2 termos quando se trabalha com parametros em função, que é passagem por valor e passgem por referencia. 
        
    No java script não existe pasasgem por referencia e sim por valor

 */
