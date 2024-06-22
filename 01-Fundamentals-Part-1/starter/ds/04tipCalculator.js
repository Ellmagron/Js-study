const bill = 275;

const tip  = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20 ;

console.log(`The bil was ${bill} and tip was ${tip} and total value was ${bill + tip}`);