'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

let lowestMax = -1;

const bags = inputString.split('\n\n');
const topCalories = bags.reduce((arr, bag) => {
  const items = bag.split('\n');
  const calories = items.reduce((sum, item) => sum + +item, 0);

  if (calories > lowestMax) {
    const index = arr.indexOf(lowestMax);
    arr.splice(index, 1, calories);
    lowestMax = Math.min(...arr);
  }

  return arr;
}, [lowestMax, lowestMax, lowestMax]);

const result = topCalories.reduce((prev, next) => prev + next);
console.log(result);
