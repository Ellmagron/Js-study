// 5 false values: 0 , '', undefined, null, NaN
// São valores que quando atribuidos a variavel booleana, serão automaticamente convertidos para um valor falso.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

//Quando o JS faz o type coercion no boolean?
// Isso ocorre em 2 cenarios
// 1: Quando usamos operadores lógicos
// 2: Em um contexto lógico, quando declarações if else acontecem

const money = 100;

if (money) {
  console.log("Don't spent it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
