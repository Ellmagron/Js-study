'use strict'



//É possivel em objetos também declar um função(método)
//

// const pedro = {
//   firstName: "Pedro",
//   lastName: "Araujo",
//   age: 2024 - 1999,
//   friends: ["Lucas", "Rafael", "João"],
//     hasDriversLicense: true,

//     calcAge: function (birthYeah){ //É apenas possivel delcarar função de expressão dentro de um objeto
//         return 2024 - birthYeah; 
//     }
// };

//Não é ideal passar o msm valor que já existe no objeto para a própria função.
// É por isso utilizamos a palavra chave THIS, que referencia o próprio objeto com suas propriedade. 
const pedro = {
  firstName: "Pedro",
  lastName: "Araujo",
  job: 'Trainnee',
  birthYeah: 1999,
  friends: ["Lucas", "Rafael", "João"],
  hasDriversLicense: false,

  //Para manter o codigo mais refinado, funções podem ser utilizadas para criar um nova propriedade dentro do próprio objeto sem a necessidade de chamar ela 4x.

//   calcAge: function () {
//     //É apenas possivel delcarar função de expressão dentro de um objeto
//     return 2024 - this.birthYeah;
//   },

  calcAge: function () {
    this.age = 2024 - this.birthYeah;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense == true ? 'a': 'not'} driver's license`
  }
};


console.log(pedro.calcAge(1999));
console.log(pedro.calcAge(1999));
console.log(pedro.calcAge(1999));
console.log(pedro.calcAge(1999));

// console.log(pedro['calcAge'](1999));

console.log(pedro.getSummary())