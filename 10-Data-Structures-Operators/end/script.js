'use strict';
const days = ['mon', "tue", "wed", "thu", "fri", "sat", "sun"]
const openingHours =  {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Thrills Restaurant',
  location: 'Broad Street, Lagos Island, Lagos State',
  categories: ['Swallow', 'Vegetarian', 'Organic'],
  starterMenu: ['Cassava', 'Garri', 'Beans'],
  mainMenu: ['Maize', 'Plantain', 'Yam'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  //{mainIndex, time, address, starterIndex }
  orderDelivery (obj) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    return obj;
  },
  orderSoup (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious soup which contains ${ing1}, ${ing2}, ${ing3}`
    );
  },
  orderBeans(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const obj = {
  firstName : "Ayo"
}
let lastName = "firstName"
console.log()

//OPTIONAL CHAINING
// for(const day of days){
//   console.log(day)
//  const open =  restaurant.openingHours[day]?.open ?? "closed"
//  console.log(`On ${day}, we are open at ${open}`)
// }
  // console.log(restaurant.openingHours.mon.open)// with opt chaining
//  const x = restaurant.openingHours.mon.open;

// console.log(x)
  // if(restaurant.openingHours.mon){
  //   console.log(restaurant.openingHours.mon.open)
  // }else{
  //   console.log(undefined)
  // }


// console.log(restaurant)
//FOR OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const [index, element] of menu.entries()){
//   console.log(`${index + 1} : ${element}`)
// }


// for(let i = 0; i < menu.length; i++) {
//   console.log(`${i}: ${menu[i]}`);
// }

//ENHANCED OBJECT LITERAL




//LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Eat and Chill',
  numOfGuest: 0,
};
const rest2 = {
  name: 'Drink and Chill',
  owner: 'ciroma',
};

// rest1.numOfGuest ||= 5
// rest2.numOfGuest ||= 5
// rest1.numOfGuest ??= 5
// rest2.numOfGuest ??= 5
// rest1.owner &&= '<ANON>';
// rest2.owner &&= '<ANON>';

// console.log('restaurant 1 ==>', rest1);
// console.log('restaurant 2 ==>', rest2);
//nullish coalescing operator
// restaurant.numOfGuests = undefined;
// const guests3 = restaurant.numOfGuests ?? 50;

// console.log(guests3)

//SHORT CIRCUITING
//can use any data type
//they can return any data type
//short circuiting
//OR OPERATOR
// console.log(3 || "Ayo")
// console.log("" || "Ayo")//Ayo
// console.log(true || 0)//true
// console.log(undefined || null|| "Dumebi")//null
// console.log(NaN || "")//''

// console.log(undefined || 0 || "" || "Hello" || 20 || null)
// restaurant.numOfGuests = 0;
// const guests1 = restaurant.numOfGuests ? restaurant.numOfGuests : 10;
// const guests2 = restaurant.numOfGuests || 50;
// console.log(guests2)
// console.log(guests1)

//AND OPERATOR
// console.log(0 && "Ayo")
// console.log(7 && "Ayo" && 0 && "Dumebi")
// console.log("Hello" && 8 && 0 && 23 && null && "Ayo")

// if(restaurant.orderBeans){
//   restaurant.orderBeans("plantain", "Agbado")
// }

// restaurant.order && restaurant.orderBeans("plantain", "Agbado") ;

//REST PATTERN
// const {sat, ...weekdays} = restaurant.openingHours;

// console.log(sat)
// console.log(weekdays)
// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum)
// }

// add(2, 3);
// add(2, 5, 7, 9, 0, 8);
// add(2, 5, 7, 9, 0, 8, 5, 6, 7, 8);
// const x  = [23,7,5]
// add(...x)

// const arr = [1,2, ...[3,4]];
// console.log(arr)

// const [a,b, ...others] = [1,2,...[3,4,5]];
// console.log(a)
// console.log(b)
// console.log(others)

// const [food1, , food2, ...otherFoods] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];

// console.log(food1)
// console.log(food2)
// console.log(otherFoods)
// restaurant.orderBeans("plantain", "bread", "maize")
// restaurant.orderBeans("plantain")

// const ingredients = [prompt("Enter ingredient 1"),prompt("Enter ingredient 2"),prompt("Enter ingredient 3")]

// restaurant.orderSoup(...ingredients)

// const newRestaurant = {...restaurant, founder : "Hussain", foundedIn : 2022 };
// newRestaurant.name = "Eat and Chill"
// console.log(restaurant)
// console.log(newRestaurant)
// const nameOfRestaurant = [...restaurant.name]
//THE SPREAD OPERATOR
// const arr = [7, 8 ,9]
// const newGoodArray = [1, 2, ...arr]
// console.log(...newGoodArray)

// const newMainMenu = [...restaurant.mainMenu, "Bread"]
// console.log(restaurant.mainMenu)
// console.log(newMainMenu)

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy)

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu)

// const str = 'Ciroma';
// const letters = [...str];
// console.log(...str)
// console.log("C", "i", "r")

//OBJECT DESTRUCTURING
// restaurant.orderDelivery({
//   time: '8:00',
//   address: 'Bodija, Ibadan',
//   mainIndex: 1,
//   starterIndex: 0,
// });

// console.log(restaurant.orderDelivery);
// const obj = restaurant.orderDelivery();
// console.log(obj)
// const { time, address, mainIndex, starterIndex } = obj;
// console.log(time);
//OBJECT DESTRUCTURING
// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName);
// console.log(tags);
// console.log(hours);

//DEFAULT VALUES FOR OBJECT DESTRUCTURING
// const { menu , mainMenu: main = ['Agbado', 'corn'] } = restaurant;

// console.log(main);

// console.log(restaurant.main)
// let [main, , secondary] = restaurant.categories;

//SWITCHING VALUES(OBJECT DESTRUCTURING)
// let a = 111;
// let b = 999;
// const obj = {
//   a: 5,
//   b: 10,
// };
// ({ a, b } = obj);
// console.log(a);

//NESTED OBJECTS

//ARRAY DESTRUCTURING
// console.log("main==>",main);
// console.log("secondary==>",secondary);
//SWITCHING VALUES WITH DESTRUCTURING
// const temp = main;
// main = secondary;
// secondary = main;

// [secondary, main] = [main,secondary];
// // console.log('main==>', main);
// console.log('secondary==>', secondary);

//RETURNING MULTIPLE VALUES FROM A FUNCTION
// const [starterFood, mainFood] = restaurant.order(1, 2)
// console.log(starterFood)
// console.log(mainFood)
//DESTRUCTURING NESTED ARRAYS
// const nested = [2, 4, [5, 6]];
// // const [x, , [y, z]] = nested;
// // console.log(x, y, z);
// const [i, ,[l, k]] = nested;
// console.log(i)
// console.log(l)
// console.log(k)

//DEFAULT VALUES
// const arr = [8];
// const [p = 1, q = 1, r = 1] = arr;
// console.log(p, q, r);

// const {
//   openingHours: {
//     thu: { open: openingTime, close: closingTime },
//   },
// } = restaurant;

// Coding Challenge #1

/* 
We're building a soccer betting app !

Suppose we get data from a web service about a certain game (below). In this challenge we will work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Oct 13th, 2022',
  odds: {
    team1: 8.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...goalScorers) {
    // console.log(`${goalScorers.length} goal(s) were scored`)
  },
};

//CODING CHALLENGE
const [players1, players2] = game.players;
// console.log(players1)
// console.log(players2)

const [gk, ...fieldPlayers] = players1;
// console.log(gk)
// console.log(fieldPlayers)

const allPlayers = [...players1, ...players2];
// console.log(allPlayers)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final)

const { team1, x: draw, team2 } = game.odds;
// console.log(team1)
// console.log(draw)
// console.log(team2)

game.printGoals(...game.scored);
game.printGoals('Thiago');

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is moe likely to win")
