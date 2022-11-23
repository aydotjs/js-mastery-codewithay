"use strict";
//FIRST CLASS FUNCTIONS AND HIGHER ORDER FUNCTIONS

// const add = function(){

// }
// const obj = {
//     orderWine : function(){

//     }
// }
// const h1 = document.querySelector("h1")
// h1.addEventListener("click", function(){
//     console.log("hello")
// })

// function addNumber(){
//     return function(){

//     }
// }

//functions accepting callbacks as an argument
// const x = function () {
//   console.log("I am called inside of a function");
// };

// const y = function (callback) {
//   console.log("say something");
//   callback();
// };
// y(x);

// const calc = function (num1, num2, calcType) {
//   if (calcType === "add") {
//     return num1 + num2;
//   }
//   else if (calcType === "multiply") {
//     return num1 * num2;
//   }
//   else if (calcType === "subtract") {
//     return num1 - num2;
//   }
// };
// console.log(calc(5, 10, "add"));
// calc(5, 10, "multiply");
// calc(5, 10, "subtract");
/*
const add = function (a, b) {
  return a + b;
};
const multiply = function (a, b) {
  return a * b;
};
const subtract = function (a, b) {
  return a - b;
};
const doWhatever = function (a, b) {
  console.log(`here are  your numbers ${a}, ${b}`);
  return "clown"
};

const calc = function (num1, num2, callback) {
    if(typeof callback === "function"){
        return callback(num1,num2);
    }
    else{
        console.log(`${callback} is not a function`)
    }
};

console.log(calc(2,5,"add"))

// const sayHi = function(){
//     console.log("Hi")
// }
// ["Ayo","Dumebi", "Ciroma"].forEach(sayHi)
// h1.addEventListener("click", sayHi)
*/

//FUNCTIONS RETURNING FUNCTIONS
// function one(){
//     return function(){
//         console.log("yaay")
//     }
// }
// one();

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// greet("Hello")("Dumebi");

// const greet3 = greeting => name => console.log(`${greeting} ${name}`);
// greet3("Hello")("Dumebi")

// const greet2 = (greeting) => {
//    const mtn =  (name) => {
//     console.log(`${greeting} ${name}`);
//   };
//   return mtn
// };
// greet2("hello")("Dumebi");

//DEFAULT PARAMETERS
// function greeter(greeting = "Hey", nameOfUser = "User") {
//   //before es6
//   // greeting = greeting || "Hey";
//   console.log(`${greeting} ${nameOfUser}`);
//   return nameOfUser
// }
// greeter("Hello", "Ciroma");

// function sayHello (greet, fn = "User" ){
// console.log(`${greet} ${fn()}`)
// }
// sayHello("Hi", greeter )
//HOW PASSING ARGUMENTS WRT PRIMITVES AND REFERENCE TYPES
/*
const network = "MTN";
const user = {
  firstName : "Ciroma",
  tariff : "MTN Pulse"
}
const checkTariff = function(userNetwork, userDetails){
userNetwork = `${userNetwork} NIGERIA`
userDetails.firstName = `Mr ${userDetails.firstName}`
console.log(`${userNetwork} `, userDetails);
}

checkTariff(network,user )
*/
// const userNetwork = network
// const userDetails = user

// console.log(network);
// console.log(user);

//Call and apply method
const mtn = {
  tariff: "MTN Pulse",
  details: [],
  sub(datasize = 0, nameOfUser = "User") {
    console.log(
      `Dear ${nameOfUser}, you have subscribed for ${datasize} MB.Your tariff plan is ${this.tariff}`
    );
    this.details.push({ nameOfUser, datasize });
  },
};

// console.log(mtn)

const glo = {
  tariff: "Glo Yafun Yafun",
  details: [],
};
const airtel = {
  tariff: "Plenti Data",
  details: [],
  data: 400,
};
const smile = {
  tariff: "Smiling",
  details: [],
};
const subscribe = mtn.sub;
// subscribe.call(glo)
// console.log(glo)

// subscribe.call(airtel, "adekunle", 20000)
// const subInfo = ["Kate", 700]
// subscribe.call(smile, ...subInfo)
// const arr = []
// arr.push({a: 1,b:2})
// console.log(arr)
//BIND METHOD
// subscribe("Ayo", 2000)
const subAirtel = subscribe.bind(airtel);
const subMtn = subscribe.bind(mtn);
// subAirtel("Ayo", 2000)
// subAirtel("Ciroma", 5000)
// subMtn("Ade", 200)
// const subSmile500 = subscribe.bind(smile, 500);
// subSmile500("Ayo")
// subSmile500("Tope")
// mtn.data = 500;
// mtn.buyData = function(){
//   this.data *= 2;
//   console.log(this.data)
// }
// document.querySelector("button").addEventListener("click",mtn.buyData.bind(airtel))

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// const runOnce = function(){
//   console.log("This will only run once")
// }
// runOnce()
// runOnce()
// runOnce()
// (function () {
//   const isPrivate = "Hi"
//   console.log("This will only run once");
// })();
// (() => {
//   console.log("This will only run once");
// })();

//MYSTICAL CLOSURE
// let dataSize = 200
// const getData = function () {
//   let dataSize = 500;
//   let q =5
//   return function(){
//     dataSize++;

//     console.log(`${dataSize} MB`);
//   };
// };
// getData()

// const subscriber = getData();
// subscriber()
// subscriber()
// subscriber()

// console.dir(subscriber)
/*
let f;

const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);
*/

const capitalizeWords = function(str){
const arrayOfWords = str.split(" ")
for(let i = 0; i < arrayOfWords.length; i++){
arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1).toLowerCase()
}
const str2 = arrayOfWords.join(" ")
console.log(str2)
}
capitalizeWords("HELLO EVERYONE HOW ARE YOU DOING")


function capitalized(sentence) {
  let stringWord = [];
  let words = sentence.split(" ");
  for (const word of words) {
    let completeWords = [word[0].toUpperCase(), word.slice(1).toLowerCase()].join("");
    stringWord.push(completeWords);
  }
  const finalWord = stringWord.toString().replaceAll(",", " ");
  console.log(finalWord);
}
capitalized("HELLO EVERYONE HOW ARE YOU DOING");
