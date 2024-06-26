"use strict";

const pedroArray = [
  "Pedro",
  "Araujo",
  2024 - 1999,
  "trainee",
  ["Lucas", "Rafael", "João"],
];

const types = [];

for (let i = 0; i < pedroArray.length; i++) {
  //Reading from array
  console.log(pedroArray[i]);

  //Filling types array

  // types[i] = pedroArray[i];

  //Filling array eith methods
  types.push(pedroArray[i]);
}

const years = [1999, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age[i] = 2024 - years[i];
}

//Continue  and break

console.log("---ONLY STRINGS ---");
for (let i = 0; i < pedroArray.length; i++) {
  if (typeof pedroArray[i] === "string") console.log(pedroArray[i], typeof pedroArray[i]);
    continue;
  
}

console.log("---BREAK WITH NUMBER ---");
for (let i = 0; i < pedroArray.length; i++) {
  if (typeof pedroArray[i] === "number") break
    console.log(pedroArray[i], typeof pedroArray[i]);
}