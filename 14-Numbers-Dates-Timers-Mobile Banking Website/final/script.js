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
  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-10-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-11-25T17:01:17.194Z',
    '2022-11-27T05:36:17.929Z',
    '2022-11-28T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Chima Francis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Esther Ojile',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Helen Nneka',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
  ],
};
const account5 = {
  owner: 'Afo Charles',
  movements: [100, 1000, 900, 50, 90],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
  ],
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
const localeString = navigator.language;
//DISPLAYING MOVEMENT
const displayMovement = function (currentAccount, sort = false) {
  containerMovements.innerHTML = '';
  const sortedMovements = sort
    ? currentAccount.movements.slice().sort((a, b) => b - a)
    : currentAccount.movements;
  console.log(currentAccount);

  sortedMovements.forEach(function (movement, index) {
    const dateStore = new Date(currentAccount.movementsDates[index]);
    const timeDiff = Math.round(
      (new Date() - dateStore) / (1000 * 60 * 60 * 24)
    );
    let time;
    if (timeDiff === 0) {
      time = 'Today';
    } else if (timeDiff === 1) {
      time = 'Yesterday';
    } else if (timeDiff === 2) {
      time = `${timeDiff} days ago`;
    } else if (timeDiff === 3 || timeDiff <= 7) {
      time = `${timeDiff} days ago`;
    } else {
      time = new Intl.DateTimeFormat(localeString, {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(dateStore));
    }
    const formattedCurrency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    }).format(Math.abs(movement));
    const typeofMov = movement < 0 ? 'withdrawal' : 'deposit';
    const htmlElement = `<div class="movements__row">
     <div class="movements__type movements__type--${typeofMov}">${
      index + 1
    } ${typeofMov}</div>
    <div class="movements__date">${time}</div>
     <div class="movements__value">${formattedCurrency}</div>
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
  labelBalance.textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(account.balance);
};
//COMPUTING TRANSACTION SUMMARY
const computeSummary = function (account) {
  const income = account.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${income.toFixed(2)} NGN`;
  const withdrawals = account.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals).toFixed(2)} NGN`;
  const interest = account.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(move => move >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} NGN`;
};
//UPDATING UI
const updateUI = function () {
  displayMovement(currentAccount);
  displayBalance(currentAccount);
  computeSummary(currentAccount);
};
const startLogIutTimer = function () {
  let time = 300;
  const tick = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);

    //in each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;
    time--;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
  };
  tick();
  //call the timer every second
  const timer = setInterval(tick, 1000);

  //when  0 seconds stop timer and log user out
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
  // const dateStore = new Date();
  // const getDate = dateStore.getDate();
  // const month = dateStore.getMonth() + 1;
  // const year = dateStore.getFullYear();
  // const hours = dateStore.getHours();
  // const min = dateStore.getMinutes();

  labelDate.textContent = new Intl.DateTimeFormat(localeString, {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());
  startLogIutTimer();
  updateUI();
});

//IMPLEMENTING TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recepientAcc = accounts.find(
    account => inputTransferTo.value === account.userName
  );
  if (
    amount > 0 &&
    recepientAcc &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== recepientAcc.userName
  ) {
    currentAccount.movementsDates.push(new Date().toISOString());
    currentAccount.movements.push(-amount);
    recepientAcc.movementsDates.push(new Date().toISOString());
    recepientAcc.movements.push(amount);
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  updateUI();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUI();
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
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
  displayMovement(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//CONVERTING STRINGS TO NUMBERS USING + OPERATOR
// console.log(20.0);
// console.log(Number('20'));
// console.log(typeof +'20');

// //PARSING
// console.log(Number.parseInt("30px"))
// console.log(Number.parseInt("px30"))
// console.log(Number.parseFloat("2.5rem"))//2.5
// console.log(Number.parseInt("2.5rem"))//2
//CHECKING FOR VALUES
// console.log(Number.isNaN(20))
// console.log(Number.isNaN("20"))
// console.log(Number.isNaN(+"20"))
// console.log(Number.isNaN(+"20px"))
// console.log(Number.isNaN(20/0))
// console.log(Number.isFinite(20))//true
// console.log(Number.isFinite("20"))//false
// console.log(Number.isFinite(20/0))// false
// console.log(Number.isFinite(2.223))// false

//MATH AND ROUNDING
// console.log(Math.sqrt(25))
// console.log(25**(1/2))
// console.log(8**(1/3))

// console.log(Math.max(20,4,5,69,2))
// console.log(Math.max("20",4,5,"69px",2))
// console.log(Math.min(20,4,5,69,2))
// console.log(Math.PI * Number.parseFloat("10.2px") ** 2)
//  console.log(Math.trunc(Math.random() * 6) + 1)

// console.log(Math.round(12.7))//13
// console.log(Math.round(12.2))//12

// console.log(Math.floor(-12.7))//-13
// console.log(Math.floor(-12.2))//-13
// console.log(Math.trunc(-12.2))//-12
// console.log(Math.trunc(-12.7))//-12

// console.log(Math.ceil("12.7"))//13
// console.log(Math.ceil(-12.7))//-12

//decimal places
// console.log(+(2.734).toFixed(1))

//REMAINDER OPERATOR
// console.log(5%2)// 1
// console.log(8%3)// 0
// labelBalance.addEventListener("click", function(){
//   const movementEl = [...document.querySelectorAll('.movements__row')]
//   movementEl.forEach((row, i) => {
//     if(i % 2 === 0){
//       row.style.backgroundColor = "slateblue"
//       row.style.color = "white"
//     }
//   })
// })

//NUMERIC SEPARATOR
// const acctBalance = 30_000_000_000 * 2;
// console.log(3.142)
// console.log("20_000")
// console.log(acctBalance)
// console.log(Number.MAX_SAFE_INTEGER);
// const maxNum = Number.MAX_SAFE_INTEGER
// console.log(maxNum *  2)
// console.log(typeof 2830829470820405703589359835n)
// console.log(typeof BigInt(5660605959))
// console.log(20n * BigInt(20))
// console.log(20n > 50)
// console.log(20n != 20)
// console.log(20n !== 20)
// console.log(11 / 3)
// console.log(11n / 3n)

//4 ways of creating creating dates in js
/*
//1
const now = new Date();
console.log(now);

// //2
// const date2 = new Date('Fri Nov 25 2022');
// console.log(date2);

//3
const date3 = new Date(2020, 9, 32, 18, 50);
console.log(date3);

4;
const date4 = new Date(365 * 24 * 60 * 60 * 1000);
console.log(date4);
*/
// const endSars = new Date(2020, 9, 20, 18, 50);
// console.log(endSars)
// console.log(endSars.getFullYear())//2020
// console.log(endSars.getMonth())//9
// console.log(endSars.getDate())//20
// console.log(endSars.getDay())//2
// console.log(endSars.getHours())//18
// console.log(endSars.getMinutes())//50
// console.log(endSars.getTime())
// console.log(Date.now())
// console.log(endSars.toISOString())
// const date2 = new Date('2020-10-20T17:50:00.000Z');
// console.log(date2);

//operation with dates
// const endSars = new Date(2020, 9, 20, 18, 50);
// console.log(+endSars)

// const daysPassed = function (date1, date2) {
//   console.log((date2 - date1) / (1000 * 60 * 60 * 24));
// };
// daysPassed(new Date(2022, 10, 25), new Date('2022-11-18T21:31:17.178Z'));
// const amount  = 50000000.67;
// const options = {
//   style :"currency",
//   currency: "NGN",
//   useGrouping : true
// }
// const formattedNumUS = new Intl.NumberFormat("en-US",options).format(amount)
// const formattedNumUK = new Intl.NumberFormat("en-UK", options).format(amount)
// const formattedNumGermany = new Intl.NumberFormat("de-DE", options).format(amount)
// console.log("US==>",formattedNumUS)
// console.log("UK==>",formattedNumUK)
// console.log("Germany==>",formattedNumGermany)

//TIMERS
//1)settimeout
//2)setiinterval
const ings = ['rice', 'beans'];
const omoElewa = setTimeout(
  (ing1, ing2) => {
    console.log(`yay, my ${ing1} and ${ing2} is here`);
  },
  5000,
  ...ings
);

if (ings.includes('beans')) {
  clearTimeout();
}
console.log('waiting....');
