'use strict';

const fs = require('fs');

const inputString = fs.readFileSync('./input', 'utf-8');

const len = 14;

for (let i = len - 1; i < inputString.length; i++) {
  const message = inputString.slice(i - len, i);
  const messageSet = new Set(message);
  if (messageSet.size === len) {
    console.log(i);
    break;
  }
}
