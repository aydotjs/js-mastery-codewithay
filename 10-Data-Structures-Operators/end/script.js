'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Thrills Restaurant',
  location: 'Broad Street, Lagos Island, Lagos State',
  categories: ['Swallow', 'Vegetarian', 'Organic'],
  starterMenu: ['Cassava', 'Garri', 'Beans'],
  mainMenu: ['Maize', 'Plantain'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[index]]
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
};
