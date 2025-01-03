'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
    1. Create one player array for each team (variables 'players1' and 'players2')
*/
const [player1, player2] = game.players;

console.log(player1, player2);

/*
    2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
*/
const [gk, ...fieldplayer] = player1;
console.log(`Goleiro:  ${gk}`);
console.log(`Jogadores de goleiro:  ${fieldplayer}`);

/*
    3. Create an array 'allPlayers' containing all players of both teams (22 players)
*/

const [...allPlayers] = [...player1, ...player2];
console.log(allPlayers);
console.log(`Todos os jogadores: ${allPlayers}`);

/*
    4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
*/

const [player1Final] = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(player1Final);

/*
    5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
*/

const {
  odds: { team1, draw, team2 },
} = game;

console.log(team1, draw, team2);

/*
    6.
    Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
*/

function printGoals(...player) {
  let score = 0;
  player.forEach(function (element, index) {
    console.log(`Jogadores: ${index + 1}  ${element}`);
    score += index;
  });
  console.log(score);
}

printGoals('Malcom', 'Rfael', 'Nathan', 'Shorch', 'Maia');

/*
//task2 
    The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
*/

team1 < team2 && console.log('Team 1 is more likely to win');
