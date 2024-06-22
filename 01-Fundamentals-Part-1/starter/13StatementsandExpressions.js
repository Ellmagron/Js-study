// Expressões vs Declarações

// Expressões
// São pquenos pedaços de código que produzem valor

3 + 4;
1991;

true & false & !false;

// Declarações:
// São grandes pedaços de códigos que não produzem valor, mas executa ações  em nosso programa. OBG: fácil de identificar pq se assemelha bastante com frase que usamos para conversar e declarações sempre terminam com ;.

if (23 > 10) {
  const str = "23 is bigger ";
}

// Js espera que tanto declaração e expressões trabalahem juntas.  ex: string interpolada que é uma declaração espera uma empressão dentro dela.

const me = "Pedro";
console.log(`I'm ${2024 - 1999} years old ${me}`);
