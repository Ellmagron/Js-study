'use strict';

/*
  Porque arrays tem métodos ? 
  Em java script array são também objetos, e todos os obejtos tem métodos, por conta disso arrarys também tem acesso a métodos, isso é é que chamamos de herença prototipa. 
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

/*
    Slice
    - Método slice não altera o array original e sim retorna um novo array.
    - Método slice pdoe ser utilizado para criar um copia superfical de um array
*/

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

/*
    Usando o slice e spread para criar um copia superficial de um array
    - Não a diferença entre as 2 copias
*/
console.log(arr.slice());
console.log([...arr]);

/*
    Método splice 
    - Semelehante ao método slice, coma diferença que ele altera o array e seu segundo parametro quer dizer os elementos que deseja deeletar.
    - slice(1,2),
*/
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

/*
    Reverse
    - É um método que simplesmente altera a orgem que os valores são apresentados dentro do array.
    - Ele altera o array original
*/

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

/*
    Faz a concatenação de dois métodos.
*/

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join('-'));
