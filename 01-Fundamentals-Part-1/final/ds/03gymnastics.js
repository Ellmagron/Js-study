const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
} else if (scoreKoalas > scoreDolphins && scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas || scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy");
} else {
  console.log("noboy win");
}
