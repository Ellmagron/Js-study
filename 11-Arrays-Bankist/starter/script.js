'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Pedro Araujo',
  movements: [
    300, 230, 830, 1200, 90, 200, -200, 340, -300, -20, 50, 400, -460,
  ],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

/*
  Exibindo Todas transações na tela, utilizando o método forEach
*/

/*
  **Boa praticas
  --Evite o uso de variaveis/dado fora do escopo da função, sempre chame a função e passe o argumento desejado, isso evita transtornos na hora de analisar o papel da função e quais dados ela esta fazendo uso.
*/
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  /*
    innerHTML = retornar tags html e seus conteudo
    textContect = retorna apenas o conteudo
  */

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // criando um elemento para inserir no html
    const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
          </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// Realizando o balanço geral da conta do usuario
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${acc.balance} €`;
};

/*Exibindo o resumo das estátatica da conta do usuario */
const calcDisplaySummary = function (acc) {
  //Depositos
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  //Saques
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  //Juros
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumInterest.textContent = `${interest}€`;
};

/*Computando o username de cada conta de usuario */
const createUsernames = function (acc) {
  accounts.forEach(function (acc) {
    //Criando um efeito secundario que é manipulação do objeto já existente, assim criando uma nova propriedade e não retornando um novo valor.
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
/*Feature: login de usuario*/
//Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  /*
   Formularios por padrão tem um comportamento que quando um sumit é realizado ele recarrega a página. 
    preventDefault por padrão previne isso.
   */
  e.preventDefault();

  //Obtendo username do usuario
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  //Obtendo o pin do usuario

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome  back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    /*Exibindo dados do usuário*/
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    containerApp.style.opacity = 1;

    //update UI
    updateUI(currentAccount);
  }
});

/*Feature Tranfêrencia de dinheiro para outro usuário */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //Limpando campos
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    //Realizando Transferencia de dinheiro
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  console.log(amount, receiveAcc);
});

/*Feature: Pedir emprestimo
  Emprestimo só é garantidom, se houver um deposito de pelo menos 10% do valor requisitado do emprestimo.
*/

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  if (loan > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(loan);
    //UpdateUi
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

/*Feature: Deletando conta de usuário */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    /*
    findIndex é semelehante ao indexOf, mas possui grande vantagem, que é a possibilidade de implementar um lógia mais complexa, já que popr sua vez, possui  função callback além de apenas passar um valor como parametro, como é o caso do findIndex
    */
    // index.indexOf();

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    /*Utilizando o método splice para deletar o objeto, porque o splice é um método que consegue mutar o array  original */
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//Ordenação de valores
let sorted = false;
btnSort.addEventListener('click', function (e) {
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
