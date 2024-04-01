const firstName = "Pedro";
const year = 2037;
const birthYear = 1999;
const job = "Trainee";

const pedro =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(pedro);

const pedroNew = ` I'm  ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(pedroNew);
