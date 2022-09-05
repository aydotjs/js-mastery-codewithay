// ACTIVATING THE STRICT MODE
"use strict";
// let giveDriversLicense = true;
// let passTest = true;
// if(passTest){
//     giveDriverLicense  = true
//     console.log(giveDriverLicense)
// }else{
//     giveDriverLicense  = false
//     console.log(giveDriverLicense)
// }

// const private = "Audio"
//8/23/2022
//FUNCTIONS
// function logger(){
// console.log("My name is Ayo");
// }
// const loggerVariable = logger();

// function sumOfNumbers (x,y){
// const sum = x + y;
// return sum;
// }

// const result = sumOfNumbers(5,7);
// console.log(result)

// function fruitBlender(apple, watermelon) {
//   const juice = `Juice with ${apple} apples and ${watermelon} watermelon`;
//   console.log(2+5);
//   return juice;
// }
//  console.log(fruitBlender(5, 6));

//FUNCTION DECLARATION AND FUNCTION EXPRESSIONS
// function fruitBlender(apple, watermelon) {
//   const juice = `Juice with ${apple} apples and ${watermelon} watermelon`;
//   console.log(juice);
//   return juice;
// }
//FUNCTION DECLARATION
// const ageOfUser = ageCalculator(2002);
// function ageCalculator(birthYear){
// const age = 2022 - birthYear;
// return age;
// }
// console.log(ageOfUser)

//FUNCTION EXPRESSIONS
// const ageCalculator2 = function (birthYear){
// const age = 2022 - birthYear;
// return age;
// }
// const ageUser2 = ageCalculator2(2007);
// console.log(ageUser2)

//ARROW FUNCTIONS
// const ageCalculator2 = function (birthYear){
// const age = 2022 - birthYear;
// return age;
// }
// const ageUser2 = ageCalculator2(2007);
// console.log(ageUser2);

// const retirementCalc = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const yearsUntilRetirement = 65 - age;
//   if (yearsUntilRetirement >= 1) {
//     console.log(
//       `${firstName} age is ${age} and you have ${yearsUntilRetirement} years left to rest`
//     );
//   } else {
//     console.log(`${firstName} age is ${age} and you have to rest immediately`);
//   }
//   return "rubbish";
// };
// const functionValue = retirementCalc(1950, "Ciroma");
// console.log(functionValue)

//FUNCTIONS CALLING OTHER FUNCTIONS
// const fruitCutter = function(fruits){
//     return fruits * 4
// }
// const fruitBlender = function (apple, watermelon) {
//   const applePieces = fruitCutter(apple);
//   const watermelonPieces = fruitCutter(watermelon);
//   const juice = `Juice with ${applePieces} apple pieces and ${watermelonPieces} watermelon pieces `;
//   return juice;
// }

// console.log(fruitBlender(2,3))

//8/24/2022
//FUNCTION ANATOMY
// function subtractNumber (x,y){
//     console.log(x)
//     return x+y
//     }
// function addNumber (x,y){
// console.log(x)
// subtractNumber(2,4);
// return x+y
// }
// addNumber(2,4);
// const sum = function (a, b) {
//   return a + b;
// };
// const sumOfNumbers = sum(5, 6);
// console.log(sumOfNumbers);

// const sum2 = (a, b) => {
//   const sum =  a + b;
//   return sum
// };
// sum2(5, 6);

//TEST DATA 1
//PRINCIPAL 20,000
//RATE = 5
//TIME = 2
//FINAL AMT = 22000
//FINAL AMT = PR + PR*T*R

// const principal = 15000;
// const rate = 0.;
// const time = 1;

// function simpleInt(principal,rate,time){
// let simpleInt = principal * rate * time
// let finalAmt = principal + simpleInt;
// return finalAmt
// }

// const finalAmount = simpleInt(principal, rate, time);
// console.log(`The final amount of the simple interest ${finalAmount}`)
//CI = PRINCIPAl * RATE * N/ N * time
//Final amt
//PRINCIPAL 20,000
//RATE = 5
//TIME = 2
//N = 3
// function compoundInt(p, r, n, t) {
//  const ci =  (p * r * n) / (n * t);
//  console.log(
//     `The final amt of the compound interest is ${ci} `
//   );
//   return 2
// }

// let result = compoundInt(2000, 0.03, 5, 3);
// console.log(result)

//INTRODUCTION TO ARRAYS

// const friend1 = "Ayo";
// const friend2 = "babatunde";
// const friend3 = "Ciroma";
// console.log(friend1, friend2, friend3)
// const box = "Paper";
// const myFunction = function () {
//   return "Hello";
// };

// const friends = [
//   "Ayo",
//   "Babatunde",
//   "Ciroma",
//   "Dumebi"
// ];

// const years = [2002, 2004, 2006]
// const calcAge = function(birthYear){
//     return 2022 - birthYear
// }
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// console.log(ages)

//BASIC ARRAY OPERATIONS
//Adding elements to an array
//PUSH METHOD
// const friends = [
//   "Ayo",
//   "Babatunde",
//   "Ciroma",
// ];

//UNSHIFT METHOD
// console.log(friends.unshift("Ralph"))
//Removing elements from an array
// friends.pop()
// console.log(friends)
// console.log(friends.pop())

// const friends = [
//     "Ayo",
//     "Babatunde",
//     "Ciroma",
//   ];

// const status = friends.includes("babatunde")
//8/29/2022
//Introduction to objects
// const person1 = {
//   firstName: "Bridget",
//   lastName: "Adekunle",
//   age: 2022 - 2005,
//   job: "Programmer",
//   friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
//   hasDriversLicense: false,
// };

// const nameKey = "firstName";
// DOT VS BRACKET NOTATION
// console.log( person1.firstName)
// console.log( person1[firstName])

// const interestedIn = prompt(`What do you want to know about person1.
// Is it firstName, lastName, age, job, friends, hasDriversLicense`);

// if(person1[interestedIn]){
// console.log(person1[interestedIn])
// }else{
//   console.log(`Invalid input!!
// Please check for firstName, lastName, age, job, friends, hasDriversLicense`)
// }

//Ciroma is a 20 years old Programmer. She has a/no driver's license.
// She has 3 friends and her best friends is Katylyn

// console.log(`Ciroma is a 20 years old Programmer. She has a/no driver's license.
// She has 3 friends and her best friends is Katylyn`)

// console.log(`${person1["firstName"]} is a ${person1.age} years old ${
//   person1.job
// }. She has ${person1.hasDriversLicense ? "a" : "no"}  driver's license.
// She has ${person1.friends.length} friends and her best friend is ${
//   person1.friends[0]
// }  `);

// person1.location = "Maldives";
// person1["hobby"] = "Playing video games";
// console.log(person1)

// //Object Method
// const person2 = {
//   firstName: "Bridget",
//   lastName: "Adekunle",
//   birthYear : 2005,
//   job: "Programmer",
//   friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
//   hasDriversLicense: false,
//   calcAge: function(lol){
//     this.result = 2022 - this.birthYear
//       console.log(lol)
//     return this.result
//   }
// }
// console.log(person2.calcAge())
// console.log(person2.result)

//8/30/2022

// OBJECT METHOD
// const person2 = {
//   firstName: "Bridget",
//   lastName: "Adekunle",
//  birthYear :2002,
//   job: "Programmer",
//   friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
//   hasDriversLicense: false,
//   calcAge : function(){
//     console.log(this)
//     return 2022 - this.birthYear
//   }
// };
// person2.calcAge()
// const person3 = {
//   firstName: "Layo",
//   lastName: "Shayo",
//  birthYear :2002,
//   job: "Programmer",
//   friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
//   hasDriversLicense: false,
//   calcAge : function(){
//     console.log(this)
//     return 2022 - this.birthYear
//   }
// };

// person3.calcAge()

//LOOPS
// console.log("Lifting weight 1 time(s)")
// console.log("Lifting weight 2 time(s)")
// console.log("Lifting weight 3 time(s)")
// console.log("Lifting weight 4 time(s)")
// console.log("Lifting weight 5 time(s)")
// console.log("Lifting weight 6 time(s)")
// console.log("Lifting weight 7 time(s)")
// console.log("Lifting weight 8 time(s)")
// console.log("Lifting weight 9 time(s)")
// console.log("Lifting weight 10 time(s)")

// for(let bunny = 1; bunny <= 20; bunny++){
// console.log(`Lifting weight ${bunny} time(s)`)
// }
// for(let bunny = 1; bunny <= 20; bunny++){
// console.log(` ${bunny}`)
// }
// const inputNumber = Number(prompt("Input a number to check if even/odd"))
// if(inputNumber % 2 === 0 && inputNumber !== 0){
//   console.log("Number is even")
// }else if(inputNumber===0){
//   console.log("Zero is invalid in this case")
// }
// else{
//   console.log("Number is odd")
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }
// LOOPING ARRAYS, BREAKING AND CONTINUING
// const friends = ["Ayo", "Babatunde", "Ciroma", 12, true, "Bayo", "Shayo"];
// const types = []
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i], typeof friends[i]);
//   // types[i] = typeof friends[i]
//   types.push(typeof friends[i])
// }
// console.log(types)

// const years = [2002, 2005, 2007, 2009];
// const age = [];
// for(let i = 0; i < years.length; i++){
// // console.log(2022- years[i])
// // age[i] = 2022 -years[i]
// age.push(2022 - years[i])
// age.push(2022 - years[i])
// }
// console.log(age)

//8/31/2022
//break and
// const friends = [
//   "Ayo",
//   "Babatunde",
//   "Ciroma",
//   12,
//   true,
//   ["Bayo", "Shayo"],
//   2,
//   "Adekunle",
// ];
// console.log(`--------ONLY STRINGS`);
// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] == "string") {
//     continue;
//   }
//   console.log(friends[i], typeof friends[i]);
// }
// console.log(`--------ONLY NUMBERS`);
// let number = "number"
// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] === number) {
//     console.log(friends[i]);
//     break;
//   }
// }

//looping backwards and loops in loops

// const friends = [
//     "Ayo",
//     "Babatunde",
//     "Ciroma",
//     12,
//     true,
//     ["Bayo", "Shayo"],
//     2,
//     "Adekunle",
//   ];

// for(let i = friends.length - 1; i >= 0; i--){
//     console.log(friends[i])
// }
// let nameOfExercise = [];
// let arrayOfExercise = ["Sit up", "Bench press", "Press Up"];
// for (let exercise = 0; exercise < arrayOfExercise.length; exercise++) {
//   console.log(`----STARTING EXERCISE ${arrayOfExercise[exercise]}`);
//   for(let rep = 1; rep <= 5; rep++){
//     console.log(`Doing the exercise ${arrayOfExercise[exercise]} ${rep} times`)
//   }
// }

// let arrayOfNumbers = [200, 400, 4000, 900, 650, 890, 3000, 3500, 756, 600, 800,6000, 5000];
// function largestNumber(arr) {
//   let array = arr[5];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > array) {
//       array = arr[i];
//     }
//   }
//   return array;
// }
// let largest = largestNumber(arrayOfNumbers);
// console.log(largest);
//create a function,

//WHILE LOOP
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// let number = 1;
// while (number <= 10) {
//   console.log(`----WHILE LOOP : ${number}`);
//   number++;
// }

// let dice1 = Math.trunc(Math.random() * 6) + 1;
// let dice2 = Math.trunc(Math.random() * 6) + 1;
// let totalSides = dice1 + dice2;

// while (totalSides !== 12) {
//   console.log(`You played ${dice1}, ${dice2}`);
//   dice1 = Math.round(Math.random() * 6);
//   dice2 = Math.round(Math.random() * 6);
//   totalSides = dice1 + dice2
//   if (totalSides === 12) {
//     console.log(`you won`);
//   } else {
//     console.log(`play again`);
//   }
// }

let arrayOfNumbers = [
  700, 200, 400, 4000, 900, 650, 890, 3000, 3500, 756, 600, 800, 6000, 5000,
];

// const highestNumber = function () {
//   let num = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] > num) {
//       num = arrayOfNumbers[i];
//     }
//   }
//   console.log(num)
// };

// highestNumber(arrayOfNumbers)
// let largest = 0
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   if(arrayOfNumbers[i] > arrayOfNumbers[0]){
//     arrayOfNumbers[0] = arrayOfNumbers[i]
//   }
// }
// console.log(arrayOfNumbers[0])

//taking input  fro user
// let inputNumber = Number(prompt("Enter a number"));
// let range = Number(prompt("Enter a range"));
// //creating for loop to generate multiplicattion table
// for (let i = 1; i <= range; i++) {
//   const result = i * inputNumber;
//   console.log(`${inputNumber} * ${i} = ${result}`);
// }

//cre

/*
Let's improve Ciroma's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
  const tip =  bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
  tips.push(tip)
  total.push(tip + bills[i])
}
console.log(bills)
console.log(tips)
console.log(total)