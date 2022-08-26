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


const friends = [
    "Ayo",
    "Babatunde",
    "Ciroma",
  ];
  
const status = friends.includes("babatunde")
