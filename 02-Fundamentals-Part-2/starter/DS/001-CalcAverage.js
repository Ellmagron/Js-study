const CalcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3


let scoreDolphins = CalcAverage(85, 54, 41);
let scoreKoalas = CalcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas)

function checkWinner(avgGDolphins, avgKoalas){
    if (avgGDolphins >  2 * avgKoalas) {
      console.log(`Dolphins (${avgGDolphins} vs ${avgKoalas})`);
    } else if (avgGDolphins > 2 * avgKoalas) {
      console.log(`Koala win (${avgKoalas}) vs (${avgGDolphins})` );
    } else{
        console.log('No tem wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas)