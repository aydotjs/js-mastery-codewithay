'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never do this
//   this.calcAge = function () {
//     console.log(2022 - this.birthYear);
//   };
};

// console.log(ciroma);
// console.log(dumebi);
// console.log(adekunle);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// console.log(Person.prototype);
// console.log(Person.prototype.isPrototypeOf())
const ciroma = new Person('Ciroma', 2002);
const dumebi = new Person('dumebi', 1995);
const adekunle = new Person('Adekunle', 2005);
// console.log(Person.prototype.constructor)
/*
const Car = function(make, speed){
this.speed = speed
this.make = make
}
Car.prototype.accelerate = function(){
  this.speed += 10
  console.log(this.speed)
}
Car.prototype.brake = function(){
  this.speed -= 5
  console.log(this.speed)
}
const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)

bmw.accelerate()
bmw.brake()
*/
class PersonCl {
constructor(firstName, birthYear){
this.firstName = firstName
this.birthYear = birthYear
}
//method will be added to the prototype property of the class
calcAge(){
console.log(2022 - this.birthYear)
}
greet (){
  console.log(`Hey ${this.firstName}`)
}
}
// PersonCl.prototype.greet = function(){
//   console.log("Hello my people")
// }

const bolanle = new PersonCl("bolanle", 1996)

bolanle.calcAge()
bolanle.greet()



// Setters and getters
const account = {
  owner : "Ayo", 
  movements : [200, 500, 6000],

  get latest(){
    return this.movements.at(-1)
  },
  set latest(mov){
    this.movements.push(mov)
  }

}
console.log(account.latest)
account.latest = 50
console.log(account.movements)