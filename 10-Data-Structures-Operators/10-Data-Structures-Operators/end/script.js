'use strict';

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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //{mainIndex, time, address, starterIndex }
  orderDelivery: function (obj) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    return obj;
  },
  orderSoup: function (ing1,ing2, ing3) {
    console.log(
      `Here is your delicious soup which contains ${ing1}, ${ing2}, ${ing3}`
    );
  },
};

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
