'use strict';

const fs = require('fs');

const inputString = fs.readFileSync('./input', 'utf-8');

const len = 4;

for (let i = len; i < inputString.length; i++) {
  const marker = inputString.slice(i - len, i);
  const markerSet = new Set(marker);
  if (markerSet.size === len) {
    console.log(i);
    break;
  }
}
