'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const chars = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const rucksacks = inputString.split('\n');
const groups = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  const group = rucksacks.slice(i, i + 3);
  groups.push(group);
}

outer: for (const group of groups) {
  for (const character of group[0]) {
    if (~group[1].indexOf(character) && ~group[2].indexOf(character)) {
      chars.push(character);
      continue outer;
    }
  }
}

const result = chars
  .map((character) => alphabet.indexOf(character) + 1)
  .reduce((prev, next) => prev + next);

console.log(result);
