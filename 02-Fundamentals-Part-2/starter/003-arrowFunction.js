'use strict'

const calcAge3 = birthyear => 2037 - birthyear
const age3 = calcAge3(1999)


console.log(age3)


const yearsUntilRetirement = (birthyear, firtName) => {
    const age = 2037 - birthyear
    const retitement =  65 - age

    return `${firtName} retires in ${retitement} years`
};

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1999, "Pedro"));


//Arrow function são muito similares com funções de expressão, diferença que ela é mais curta, logo mais rapida de se escrever. Caso tenha apenas, não necessita de um corpo e não precisa de um return