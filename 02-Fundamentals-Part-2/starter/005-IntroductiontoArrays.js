'use strict'

//Maneira convencional de declarar multiplos valores

const friend1 = 'Michael';
const friend2 = "Steven";
const friend3 = "Peter";

//Estrutura de dados
//Utilizando array

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
console.log(friends[friends.length - 1])  // <-- é esperado dentro dos [] uma expressão, já que é esperado o retorno ed um valor. 

//Array/vetores não é um valor primitivo, então é possivel alterar seus valores. Isso acontece por causa da maneirar como JS armazena seus valores na mémoria. (section how JS work  behind the scenes)

friends[2] = 'Jay'
console.log(friends);

//Não é possivel alterar todo um array de uma vez.

//friends = ['Bob', 'Alice'];


const firstName = 'Pedro';

const pedro = [firstName, 'Araujo', 2024 - 1999, 'Trainee', friends] //É possveil fazer um aninhamento de array, ou seja criar um array dentro  outro array. 
console.log(pedro)
console.log(pedro.length)

//Exercise - Calculado idade de um array

const calcAge = function(birthYeah){
    return 2037 - birthYeah
}


const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]

console.log(ages);