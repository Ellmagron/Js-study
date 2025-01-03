'use strict';

const araujo = {
  firstName: 'Araujo',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1 antes ES6
    // const self = this;
    // const isMillenial = function () { //Apesar dessa função regular estar sendo chamada dentro de um método ela inda ira retornar undefined, como se estivesse sido declarada e chamada fora de um objeto.
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, //Nunca utilizar arrow function como método, porque ela não tem a palavra THIS, e isso pode causar erros.
};

araujo.greet();
araujo.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

//Arguments não existem em arrow function, apenas em função regulares.
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
