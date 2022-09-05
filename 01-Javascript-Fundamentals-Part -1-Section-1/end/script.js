/* console.log("yaaayyym, i am excited");
alert("hello world");*/

// VALUES AND VARIABLES
// console.log('Ayo');
// console.log(100);

// let firstName = "dumebi";
// let lastName = "Ciroma";
// let myFirstName = "Ayo";

// let Name = "Ayo";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName)

// let _firstJob = "Programmer";
// let currentJob = "teacher";

// let job1 = "Programmer";
// let job2 = "teacher";

//TOPIC 4 -DATA TYPES
// let highScore = 100;
// let playerName = "Ciroma";
// console.log(highScore)
// Primitive data types
// 1)Numbers
// 2)String
// 3)Boolean
// 4)Undefined
// 5)null
// 6)symbol
// 7)BigInt

// 1)Numbers
// let PI = 3.142;
// let distance = 200;
// console.log(typeof distance)

// 2)String
// let sentence = "John is walking home"
// console.log(typeof sentence)

// 3)Boolean
// let isRaining = false;
// console.log(typeof isRaining)

//8/16/2022

// 4)Undefined
// let box;
// console.log(typeof box);

// 5)null
// let box = null;
// console.log(typeof box)

// 6)symbol

// 7)BigInt

// dynamic typing
// let myName = "Ayo";
// console.log("myName");

// LET, CONST AND VAR

// let currentYear = 2022;
// currentYear = 2023;
// console.log(currentYear)

// let price;
// console.log(price)

// const
// const birthYear = 2000;
// console.log(birthYear)
// const price = "uh";
// console.log(price)

// var
// var myFavouriteColor = "Black";

// myFavouriteColor = "Cyan"
// console.log(myFavouriteColor)

// myColor = "Yellow";
// console.log(myColor)

//====> BASIC OPERATORS
// mathematical op
// const currentYear = 2022
// const ageCiroma = currentYear-2002;
// const ageDumebi = currentYear-2000;
// console.log(ageCiroma * 2);
// console.log(ageDumebi / 2);

// const firstName = "Ciroma";
// const lastName = "Adekunle";
// console.log(firstName+" "+lastName);

// typeof op
// console.log(typeof "Hello")

//Assignment op
// let x = 10 + 5;
// +=
// -=
// /=
// *=
// x *= 20// x = x * 20
// console.log(x);
// let y = 10;

// y+=20; // y = y + 20
// console.log(y)

// let x = 5;
// x
// console.log(x)

// comparison  operators
// const currentYear = 2022
// const ageCiroma = currentYear-2002;
// const ageDumebi = currentYear-2000;

// const isDumebiOlder = ageDumebi > ageCiroma;

// console.log(currentYear-2000 > currentYear-2002)

// Operator precedence

// let x,y;
// x = y = 25 -10 -5;
// console.log(x , y)
// const currentYear = 2022
// const ageCiroma = currentYear-2002;
// const ageDumebi = currentYear-2000;
// const averageAge = (ageCiroma + ageDumebi)/2;
// console.log(averageAge)
//CODING CHALLENGE -1

// const massCiroma = 78;
// const heightCiroma = 1.68;
// const massDumebi = 92;
// const heightDumebi = 1.95;

// const dumebiBMI = massDumebi /(heightDumebi * heightDumebi) ;
// const ciromaBMI = massCiroma /(heightCiroma * heightCiroma) ;
// console.log(dumebiBMI, "Dumebi");
// console.log(ciromaBMI, "Ciroma");

// const ciromaHigherBMI = ciromaBMI > dumebiBMI;
// console.log(ciromaHigherBMI)

//8/17/2022

// TEMPLATE LITERALS
// let firstName = "Ciroma";
// let lastName = "Adekunle";
// console.log(firstName + " "+ lastName)

// console.log(
//   "I woke up with " + 500 + " , and I am going to bed with " + (500 - 200)
// );
// console.log(typeof
//   `I woke up with ${500} and and iam going to bed with ${500 - 200}`
// );

// console.log( "This is a \n\
// string\n\
// with multiple lines")

// console.log(`This is a
// string
// with multiple
//  lin
//  es`)

// IF ELSE STATEMENTS

// const age = 120;
// if(age >= 18){
//  console.log("come get your license")
// }else{
//     console.log(`come in ${18-age} year(s) time`)
// }

//TYPE CONVERSION AND TYPE COERCION
// const birthYear = "2000";
// console.log(Number(birthYear) + 20)

// const myName = "Ayo";
// console.log(typeof Number(myName))
// let highScore = 100;
// console.log(typeof String(highScore))

// const birthYear = "2000";
// console.log(birthYear + 20)

// console.log(2 + 3+ "5" - 3 )
// let n ="1" + 1;
// n = n - 1;
// console.log(n)

// console.log("4" + "3" - "2" + "1" - 1)
// console.log("2" + "5" - 1 )

// TRUTHY AND FALSY
// 0, "", undefined, null , NaN

// console.log(Boolean(0))

// console.log(Boolean(""))

// console.log(Boolean("Ayo"))

// console.log(Boolean(8))

// console.log(Boolean(undefined))

// console.log(Boolean(null))

// const money = "";

// if(money){
//     console.log("Don't spend it all")
// }else{
//     console.log("Get a job");
// }

// let height = 0;
// if(height){
//     console.log("yaay, height is defined");
// }else{
//     console.log("uhhhh, height is undefined");
// }

// EQUALITY OPERATORS
// 8/18/2022

// const age = "18";
// if (age === 18) {
//   console.log("Adult");
// } else {
//   console.log("something...");
// }

// const userInput = Number(prompt("Enter your lucky number"));
// if (userInput === 50) {
//   console.log("Yaay, you won 50K");
// } else if (userInput === 100) {
//   console.log("Yaay, you won 100K");
// } else if (userInput === 150) {
//   console.log("Yaay, you won 150K");
// } else {
//   console.log("Keep trying....");
// }

// if(userInput !== 50){
//     console.log("Why not 50?")
// }

// BOOLEAN LOGIC
//AND, OR, NOT

// const isDarkSkinned = true;
// const isHausa = true;
// const isEducated = true;
// console.log(isDarkSkinned && isHausa )
// console.log(isDarkSkinned || isHausa )
// console.log(isDarkSkinned && isHausa || isEducated  )
// console.log(!isDarkSkinned && isHausa && isEducated )
// console.log(isDarkSkinned && isHausa )
// console.log(isDarkSkinned && isHausa )

// SWITCH CASE STATEMENT
// const day = prompt("What day is today?")
// switch(day){
//     case "Monday":
//         console.log("Structure my course contents");
//         console.log("Today is monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//     case "Friday":
//         console.log("Today is my Favorite day");
//         break;
//     case "Saturday":
//         console.log("Owambe tinzz");
//         break;
//     case "Sunday":
//         console.log("Rest");
//         break;
//     default:
//         console.log("Day is Invalid")
// }

// if(day === "Monday"){
//     console.log("Structure my course contents");
//     console.log("Today is monday");
// }else if(day === "Tuesday"){
//     console.log("Today is Tuesday");
// }else if(day === "Wednesday"){
//     console.log("Today is Wednesday");
// }else if(day === "Thursday" || day === "Friday"){
//     console.log("Today is my Favorite day");
// }else if(day === "Saturday"){
//     console.log("Owambe tinzz");
// }else if(day === "Sunday"){
//     console.log("Rest");
// }else{
//     console.log("Day is Invalid")
// }

//

//STATEMENTS AND EXPRESSIONS

// 3 + 4; //
// 5; //

// console.log(`I woke up with ${500} and went to bed with ${18 === 18}.`);
// if(18 === 18){
//     console.log("it is equal")
// }
const massCiroma = 78;
const heightCiroma = 1.68;
const massDumebi = 200;
const heightDumebi = 1.95;

const dumebiBMI = massDumebi /(heightDumebi * heightDumebi) ;
const ciromaBMI = massCiroma /(heightCiroma * heightCiroma) ;
console.log(dumebiBMI, "Dumebi");
console.log(ciromaBMI, "Ciroma");

if(ciromaBMI > dumebiBMI){
    console.log(`Ciroma BMI (${ciromaBMI}) is higher than Dumebi's (${dumebiBMI})`)
}else{
    console.log(`Dumebi's BMI (${dumebiBMI}) is greater than Ciroma's (${ciromaBMI}) `)
}