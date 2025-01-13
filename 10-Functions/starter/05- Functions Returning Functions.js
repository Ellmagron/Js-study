const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//arrow funtion
const greetarr = greeting => name => console.log(`${greeting} ${name}`);
