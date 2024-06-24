'use strict'

const pedro = {
  firstName: "Pedro",
  lastName: "Araujo",
  age: 2024 - 1999,
  job: "Trainee",
  friends: ["Lucas", "Rafael", "João"],
};

//Existe 2 maneiras de recuperar valores de um obejto. 1: usando .   2: usando []
console.log(pedro)

console.log(pedro.firstName)
console.log(pedro['lastName'])

// É possivel utilizar expressões ao utilizar [] para recuperar um valor do de um objeto.

const nameKey = 'Name'

console.log(pedro['first' + nameKey])
console.log(pedro['last' + nameKey]);

//Sabendo que é possivel utilizar expressões ao recuperar um valor de um objeto,  é possivel computar uma string para que o usuario possa recuperar o valor desejado.


const inter = prompt("What do you want to know about Pedro ? Chose between firstName, lastName, age, job, and friends")
if(pedro[inter]){
    console.log(pedro[inter])
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

//Adicionando novas propriedade para o objeto

pedro.location = 'Brazil'
pedro['twitter'] = '@Ellmagron'
console.log(pedro)

//Challenge

//"Jonas has tem 3 friends, and his best friend is call Michael"

console.log(`${pedro.firstName} has tem ${pedro.friends.length } friends ${pedro.friends}, and his best friend is call ${pedro.friends[0]}`);
