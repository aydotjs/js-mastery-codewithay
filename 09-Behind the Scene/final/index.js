"use strict";
// const firstName = "Ciroma";

// function first() {
//   let a = 1;
//   console.log(a);
// }
// first()

// const second = function () {
//   let b = 2;
//   console.log(b);
// };
// second();
// console.log(b)

// function calcAge(birthYear) {
//   let currentYear = 2022;
//   let age = currentYear - birthYear;
//   return age;
// }
// console.log(calcAge(2002))
// console.log(currentYear)

// function outerFunction(){
//     let outerFunctionVar = "I am Outside";
//     function innerFunction(){
//         let innerFunctionVar = "I am Inside"
//         console.log(outerFunctionVar)
//     }
//     innerFunction()
// }
// outerFunction()

//Block scope
// let age = 20
// if(age >= 20){
//    const sentence = "I am old enough"
//     // console.log(sentence)
// }
// console.log(sentence)

// const firstName = "Ciroma";
// first();
// function first() {
//   const b = "Hello";
//   second();
// }

// function second() {
//   const c = "Hi";
//   third();
// }
// function third() {
//   const d = "bye";
//   console.log(b + c + d);
// }

// function calcAge(birthYear) {
//   let currentYear = 2022;
//   let age = currentYear - birthYear;
//  function printAge(){
//     const output = `you are ${age}, and born in ${birthYear}`
//    //  console.log(output)
//     if(age >= 18){
//        var adult = true;
//        let firstName = "Dumebi"
//         let str = `Oh ${firstName}, you are an adult`
//       //   console.log(str)
//     }
//  }
//  printAge()
//  console.log(adult)
// }
// const firstName = "Ciroma";
// calcAge(2002)

// var myName = "Ciroma";

// function addNum() {

//   let x = 4;
//   if (x == 5) {
//     alert("Hello");
//   }
//   let y = 5;
// }

// const myName = "Dumebi";

// if (myName === "Dumebi") {
//   console.log(`Dumebi is a ${job}`);
//   const age = 2022 - 2000;
//   // console.log(age);
//   let job = "Teacher";
//   console.log(x);
// }

//Variable declarations
// var me = "Ciroma";
// let age = "20";
// const job = "Teacher"

//function declarations
// console.log(addNumArrow(2, 3));

// function addNumDecl(a, b) {
//   return a + b;
// }

// // const addNumExp = function (a, b) {
// //   return a + b;
// // };

// const addNumArrow = (a, b) => a + b;
// if(!shoppingItems){
//   deleteShoppingItems()
// }
// var shoppingItems = 10;
// function deleteShoppingItems() {
//   console.log(`All products have been deleted`);
// }
// function anon(){
//   let d = 5
// }
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(window)

// const person1 = {
//     firstName : "Ciroma",
//     year : 2000,
//     calcAge : function(){
//         console.log(this)
//         return 2022 - this.year
//     }
// }
// console.log(person1.calcAge())

//This keyword in practice
// console.log(this)

// const calcAge = function(birthYear){
// console.log(2022 - birthYear)
// console.log(this)
// }
// calcAge(2000)

// const calcAgeArrow = (birthYear) => {
// console.log(2022 - birthYear)
// console.log(this)
// }
// calcAgeArrow(2000)

// const person1 = {
//   firstName: "Ciroma",
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   }
// };
// // person1.calcAge();
// // person1.greet()
// const f = person1.calcAge
// f()

// const person1 = {
//   firstName: "Ciroma",
//   birthYear: 2000,
//   calcAge: function () {
//     console.log(this);
//     //before the advent of arrow functions//2015
//     // const self  = this
//     // const isAdult = function(){
//     //   console.log(self)
//     //   console.log(self.birthYear <= 2004)
//     // }
//     // isAdult()
//     const isAdult = () => {
//       console.log(this);
//       console.log(this.birthYear <= 2004);

//       const hasDriversLicense = () => {
//         console.log(`hey ${this.firstName}, come get your license`);
//       };
//       hasDriversLicense();
//     };
//     isAdult();
//   },
// };
// person1.calcAge();

// function addNumDecl(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// addNumDecl(2, 5);
// const addNumExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addNumExp(2, 5, 6);
// const addNumArrow = () => {
//   console.log(arguments);
//   return a + b;
// };
// addNumArrow(2, 5, 6);

//Primitives and Objects
// let age = 20;
// age = 21;
// let oldAge = age;

// console.log("age==>", age);
// console.log("oldAge==>", oldAge);

// let person1 = {
//   firstName : "Ciroma",
//   age : 20
// }
// let person2 = person1;
// person2.age = 23;
// person2.job = "Prog"
// console.log(person1)
// console.log(person2)
//Primitive Types
// let lastName = "Ciroma"
// let oldLastName = lastName;
// lastName = "Adekunle"
// console.log(lastName)
//Reference Types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Ciroma",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Adekunle";
// console.log("before marriage =>", jessica);
// console.log("after marriage =>", marriedJessica);

//Copying objects
const dumebi = {
  firstName: "Kate",
  lastName: "Dumebi",
  age: 20,
};
let dumebiCopy = Object.assign({gender: "male"}, dumebi);
dumebiCopy.age = 30
console.log(dumebiCopy)
