'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const rucksacks = inputString.split('\n');
const errors = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (const rucksack of rucksacks) {
  const len = rucksack.length;
  const firstComp = rucksack.slice(0, len / 2);
  const secondComp = rucksack.slice(len / 2, len);
  const characters = firstComp.split('');

  for (const character of secondComp) {
    if (characters.includes(character)) {
      errors.push(character);
      break;
    }
  }
}

const result = errors
  .map((character) => alphabet.indexOf(character) + 1)
  .reduce((prev, next) => prev + next);

console.log(result);
