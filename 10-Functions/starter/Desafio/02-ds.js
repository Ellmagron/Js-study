'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  /*   Como a função callback ainda tem acesso à variável header mesmo depois de já ter sido executada?     - A função callback tem acesso a toda a variável de ambiente da sua função pai no local de sua declaração. Assim, mesmo após a função já ter sido executada e não existir mais, a função callback ainda guarda na sua memória toda a sua variável de ambiente, é o que chamos de clousere  */
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
