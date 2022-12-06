'use strict';

const fs = require('fs');
const inputString = fs.readFileSync('./input', 'utf-8');

const pairs = inputString.split('\n');
let result = 0;

for (const pair of pairs) {
  const [first, second] = pair.split(',');
  const [firstFrom, firstTo] = first.split('-').map(Number);
  const [secondFrom, secondTo] = second.split('-').map(Number);

  result += !(
    firstTo < secondFrom && firstTo < secondTo ||
    secondTo < firstFrom && secondTo < firstTo
  );
}

console.log(result);
