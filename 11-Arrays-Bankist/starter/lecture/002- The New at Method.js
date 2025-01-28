/*
    - Método at, é um forma de mais morder de se buscar o index de um array como já tradicionalmente feito usando o o []  junto com sua posição.
    - Particularidade do método: Caso deseje obter o último elemento de um array, método at faz isso de uma maneira muito mais simples, e também permite executar encadeamento de métodos.  

    Método at também funciona com strings
    -
*/

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at());
