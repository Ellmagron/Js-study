/*
    Given an array of forecasted maximum temperatures, 
    the thermometer displays a string with these
    temperatures.

    Create function 'printForecast' which takes in an array 'arr'
    and logs  a string like the above to the console.

    Test data 1: [17, 21, 23]
    Test data 2: [12, 5, -5, 0, 4]
*/

/*

//Entenendo o problema
    1) Quantas mensagens? A mensgem deve ser uma única string contendo todos os valores do vetor
    2) O array transformado em string deve ser separado por ...
    3) O que é os X days? É index atual do valor do vetor
//Divindo o problema.
    1) Imprir no console todos os valores do vetor
    2) Com todos os valores do vetor construir uma única string com começando com '...' e terminado com ºC
*/

const printForecast = arr => {
  let degree = '';

  for (let i = 0; i < arr.length; i++) {
    degree += `...${arr[i]}ºC in ${i + 1} days `;
    console.log(arr[i]);
  }
  console.log(degree);
};

printForecast([17, 31, 23]);
