'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MOBILE BANKING WEBSITE

// Data
const account1 = {
  owner: 'Ayobami Owoeye',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Chima Francis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Esther Ojile',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Helen Nneka',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Afo Charles',
  movements: [100, 1000, 900, 50, 90],
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

//DISPLAYING MOVEMENT
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const sortedMovements = sort
    ? movements.slice().sort((a, b) => b - a)
    : movements;

  sortedMovements.forEach(function (movement, index) {
    const typeofMov = movement < 0 ? 'withdrawal' : 'deposit';
    const htmlElement = `<div class="movements__row">
     <div class="movements__type movements__type--${typeofMov}">${
      index + 1
    } ${typeofMov}</div>
     <div class="movements__value">${movement} &#8358</div>
       </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
};

//COMPUTING USERNAME
const createUserName = function (userAccounts) {
  userAccounts.forEach(function (userAccount) {
    userAccount.userName = userAccount.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
//DISPLAYING BALANCE
const displayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, move, index, arr) => acc + move,
    0
  );
  labelBalance.textContent = `${account.balance} NGN`;
};
//COMPUTING TRANSACTION SUMMARY
const computeSummary = function (account) {
  const income = account.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${income} NGN`;
  const withdrawals = account.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)} NGN`;
  const interest = account.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(move => move >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest} NGN`;
};
//UPDATING UI
const updateUI = function () {
  displayMovement(currentAccount.movements);
  displayBalance(currentAccount);
  computeSummary(currentAccount);
};

//IMPLEMENTING LOGIN
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    account => inputLoginUsername.value === account.userName
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //DISPLAY UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
  }
  inputLoginPin.value = '';
  inputLoginUsername.value = '';
  updateUI();
});

//IMPLEMENTING TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recepientAcc = accounts.find(
    account => inputTransferTo.value === account.userName
  );
  if (
    amount > 0 &&
    recepientAcc &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== recepientAcc.userName
  ) {
    currentAccount.movements.push(-amount);
    recepientAcc.movements.push(amount);
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  updateUI();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI();
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      account => account.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = '';
    inputClosePin.value = '';
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(Number.isNaN(20))
console.log(isNaN("20x"))
console.log(Number.isNaN(20/0))
console.log(Number.isFinite(2.5666666666666666666666666666666))

console.log(Math.round("20.7"))

console.log(Math.floor(23.56))
console.log(Math.floor(-23.16))