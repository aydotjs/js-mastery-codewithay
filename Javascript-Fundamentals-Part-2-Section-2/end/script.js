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
// const person1 = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   birthYear: 1996,
//   job: "Teacher",
//   complexion: "Fair",
//   interest: "Playing video games",
//   friends: ["ciroma", " dumebi", " adekunle"],
//   calcAge: function () {
//     this.age = 2022 -this.birthYear
//     return this.age;
//   },
//   hasDriverLicense: false,
//   getSummary : function(){
//     console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriverLicense? "a" : "no"} driver's license `)
//   }
// };

// person1.getSummary();

// console.log(person1.calcAge());
// console.log(person1["calcAge"]());
// console.log(person1["calcAge"]());
// console.log(person1["calcAge"]());

// console.log(person1.friends);

// console.log(person1["age"])
// console.log(person1.age)

// const lastWord = "Name";
// console.log(person1["first" + lastWord])
// const interest = prompt(
//   "What are you interested in, firstName, lastName, age, job, complexion"
// );
// if(person1[interest]){
//   console.log(person1[interest])
// }else{
//   console.log(`Wrong request,choose between  firstName, lastName, age, job, complexion `)
// }
// console.log(
//   `${person1["firstName"]} has ${person1.friends.length} friends and his best friend is${person1.friends[1]}`
// );

//CODING CHALLENGE
// const person1 = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   height: 2,
//   mass: 85,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// const person2 = {
//   firstName: "Dumebi",
//   lastName: "Katrina",
//   height: 2,
//   mass: 80,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// if (person2.calcBMI() > person1.calcBMI()) {
//   console.log(
//     `${person2.firstName}'s BMI (${person2.calcBMI()}) is greater than ${
//       person1.firstName
//     }'s BMI (${person1.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${person1.firstName}'s BMI (${person1.calcBMI()}) is greater than ${
//       person2.firstName
//     }'s BMI (${person2.calcBMI()})`
//   );
// }

// for(const rep = 1; rep <=10; rep++){
//   // console.log(`Lifting weights repitition ${rep}`)
// }

// const arr = [
//   "Ayo",
//   "Ciroma",
//   "Dumebi",
//   100,
//   true,
//   ["Afro", "AfroFusion", "Rock"]
// ]
// const types = []
// for(let i = 0; i<arr.length; i++ ){
//   // console.log(arr[i], typeof arr[i])
//   // types[i] = typeof arr[i]
//   types.unshift(typeof arr[i])
// }
// console.log(types)

// console.log(5%2)

// for(let i = 0; i<=100; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }
// const arr = [
//   "Ayo",
//  "Ciroma",
//   "Dumebi",
//   100,
//   true,
//   ["Afro", "AfroFusion", "Rock"],
//   "Dumeb",
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") {
//     break;
//   }
// console.log(arr[i], typeof arr[i]);
// }

// let counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }
let random = Math.round(Math.random() * 6);
while(random !== 6){
  console.log(`you rolled ${random}`)
 random = Math.round(Math.random() * 6);

}


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
let arrayOfBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
let tips = [];
let totals= [];

for (let i = 0; i <= arrayOfBills.length; i++){
fu
}