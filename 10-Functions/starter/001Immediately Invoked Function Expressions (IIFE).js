/*
  Expressões de funções imediatamente invocadas
  -Não é necessáriamente umr recurso da linguagem java script, e sim um padrão criado por outros desenvolvdeores que foi adotado mais tarde pela comunaide.

  -IEFE são uteis quando queremos que uma função seja chamasd apenas um úncia vez em nosso programa. T
*/

//Função comum

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//Função imediatamente invocada
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate);
(() => console.log('This will ALSO never run again'))();

/*

Funções imediatamente invocadsa
Tem a capacidade de esconder ou privar uma variavel dor esto do programa, Mas isso não é mais utlizado bo java script moderno.
se tudo qu deseje é rpivar uma varivael, pode simplesmente criar um blcoo e declar um let ou const


{
  const isPrivate = 23;
  var notPrivate = 46;
}
 */
