'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const rpsMap = {
  'A': {
    value: 1,
    beats: 'C',
    loses: 'B',
  },
  'B': {
    value: 2,
    beats: 'A',
    loses: 'C',
  },
  'C': {
    value: 3,
    beats: 'B',
    loses: 'A',
  },
};

let result = 0;

const rounds = inputString.split('\n');
for (const round of rounds) {
  const operation = round[2];
  const opponent = round[0];
  const config = rpsMap[opponent];

  if (operation === 'X') {
    result += rpsMap[config.beats].value;
  } else if (operation === 'Z') {
    result += 6;
    result += rpsMap[config.loses].value;
  } else {
    result += 3;
    result += config.value;
  }
}

console.log(result);
