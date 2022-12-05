'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const rpsMap = {
  'X': {
    value: 1,
    beats: 'C',
    loses: 'B',
  },
  'Y': {
    value: 2,
    beats: 'A',
    loses: 'C',
  },
  'Z': {
    value: 3,
    beats: 'B',
    loses: 'A',
  },
};

let result = 0;

const rounds = inputString.split('\n');
for (const round of rounds) {
  const selection = round[2];
  const opponent = round[0];
  const config = rpsMap[selection];

  result += config.value;
  if (config.beats === opponent) {
    result += 6;
  } else if (config.loses !== opponent) {
    result += 3;
  }
}

console.log(result);
