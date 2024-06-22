'use strict'



//Declartion    <-- é possivel chamar antes de ser declara. Isso se chamda HOSTI ou içamento
function calcAge1(birthyear){
    return  2037 - birthyear;
}
const age1 = calcAge1(1999)

//Expression Função de expressão é muito similar com a declartiva, única diferença é que ela não pode ser chamda antes de ser declrada e não é capaz de usar a palavra THIS. 
const calcAge2 = function(birthyear){
    return 2037 - birthyear
}
const age2 = calcAge2(1999)


console.log(age1, age2)
