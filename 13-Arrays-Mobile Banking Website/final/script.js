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

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, index) {
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
displayMovement(account1.movements);

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['NGN', 'Nigerian Naira'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/
//simple array methods
//slice method
/*
let arr = ["a","b","c","d","e"];
console.log(arr.slice(2))
console.log(arr.slice(2,4))
console.log(arr.slice(-1))

console.log(arr.slice())//create shallow copy
console.log([...arr])
//splice method
console.log("----SPLICE------")
console.log(arr)
console.log(arr.splice(2,2))
console.log(arr)

//reverse method
console.log("----REVERSE-----")
arr = ["a","b","c","d","e"];
const arr2 = ["j","i","h","g", "f"]
console.log(arr2.reverse())
console.log(arr2)


//concat method
console.log("----CONCAT-----")
const letters = arr.concat(arr2);
console.log(letters)
console.log([...arr, ...arr2])

//Join method
console.log(letters.join("-"))

*/
//At method
/*
const arr = [20,40,60]
console.log(arr[0])
console.log(arr.at(0))
console.log(arr[arr.length-1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

// console.log("Ayo".at(0))
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const [index,movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${index + 1}: Your deposit is ${movement} `)
  }else{
    console.log(`Movement ${index + 1}: Your withdrew ${Math.abs(movement)} `)
  }
}

//FOR EACH METHOD

console.log("----FOR EACH METHOD------")
movements.forEach(function(movement, index){
  if(movement > 0){
    console.log(`Movement ${index + 1}: Your deposit is ${movement} `)
  }else{
    console.log(`Movement ${index + 1}: Your withdrew ${Math.abs(movement)} `)
  }
})
//FOR EACH METHOD WITH MAPS AND SETS

*/
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['NGN', 'Nigerian Naira'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function(value, key){
// console.log(`${key} : ${value}`)
// })

// const currencySet = new Set (["USD", "NGN", "GBP", "CAD", "USD", "NGN"])
//  currencySet.forEach(function(value){
//   console.log(`${value} : ${value}`)
// })
/////////////////////////////////////////////////
/* 
Ciroma and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsCiroma' and 'dogsKate'), and does the following things:

1. Ciroma found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Ciroma's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Ciroma's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy "🐶)
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Ciroma's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Ciroma's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const checkDogs = function (dogsCiroma, dogsKate) {
//   const ciromaNew = dogsCiroma.slice();
//   ciromaNew.splice(0, 1);
//   ciromaNew.splice(-2);
//   const dogs = dogsKate.concat(ciromaNew);
//   console.log(dogs)
//   dogs.forEach(function(element,index){
//     element >=3 ? console.log(`Dog number ${index + 1} is an adult, and is ${element} years old`) : console.log(`Dog number ${index + 1} is still a puppy `)
//   })
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs( [9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
//DATA TRANSFORMATION =>MAP,FILTER, REDUCE
//MAP METHOD
// const usdToNgn = 850;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementNGN = movements.map(function(movement){
// return movement * usdToNgn
// })
// console.log(movementNGN)
// const movementNGN = movements.map(movement => movement * usdToNgn);
// console.log(movementNGN);

// const movementNGNFor = []
// for(const move of movements){
// const newNg = move * usdToNgn;
// movementNGNFor.push(newNg)
// }
// console.log(movementNGNFor)
// const movementDescriptions = movements.map((movement, index) => {
//   if (movement > 0) {
//     return `Movement ${index + 1}: You deposited is ${movement} `;
//   } else {
//     return `Movement ${index + 1}: Your withdrew ${Math.abs(movement)} `;
//   }
// });
// console.log(movementDescriptions);
// const movementDescriptions = movements.map((movement, index) => {
//   return `Movement ${index + 1}: You ${
//     movement > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(movement)} `;
// });
// console.log(movementDescriptions);

// const user = 'Chima Francis';//ao
// const userName = user.toLowerCase().split(" ").map(function(name){
// return name[0]
// }).join("");

//FILTER
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter( move => move > 0);
// console.log(deposits);
// const depositsFor = [];
// for (const x of movements) {
//  x > 0 ? depositsFor.push(x) : ""
// }
// console.log(depositsFor);

//REDUCE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements)
const balance = movements.reduce(function(acc,move,index,arr){
  console.log(`Iteration ${index} : ${acc}`)
  return acc + move
}, 0)
console.log(balance)

