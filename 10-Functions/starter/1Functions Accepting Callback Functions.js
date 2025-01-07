'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Função ordem superior

const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log();
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // <- isso é chamado de função callback, porque a função não esta sendo diretamente chamada no argumento, e sim quando a função é executada
transformer('JavaScript is the best!', oneWord);

//Java script utiliza funções callback o tempo todo

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

/*
    Porque utilziar callback?

    1- torna o codigo muito mais dividido e reutilizavel
    2- abstrair código

    abstração de código é a ideia de ocultar os detalhes de uma determinada implementação do código

    Exemplo: Para a função transformer, não importa como a string está sendo tratada basta aepans que a tranformação acontece quando o argumento fn, que é a função upperFirstWord ou oneWord devolva or esultado esperado.
*/
