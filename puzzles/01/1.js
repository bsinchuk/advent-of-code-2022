'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const bags = inputString.split('\n\n');
const result = bags.reduce((max, bag) => {
  const items = bag.split('\n');
  const calories = items.reduce((sum, item) => sum + +item, 0);
  return calories > max ? calories : max;
}, 0);
console.log(result);
