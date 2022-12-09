'use strict';

const fs = require('fs');
const zip = require('lodash/zip');

const inputString = fs.readFileSync('./input', 'utf-8');

const [table, commands] = inputString.split('\n\n');

const rowsAsStrings = table.split('\n');
rowsAsStrings.pop();
const rowsAsArrays = rowsAsStrings.map((str) => {
  const arr = str.split('');
  return arr.map((char) => {
    if (char === '[' || char === ']') {
      return ' ';
    }
    return char;
  });
});

const stacksWithEmptyColumns = zip(...rowsAsArrays);
const stacksWithEmptyCells = stacksWithEmptyColumns.filter((arr) =>
  !!arr.join('').trim(),
);
const stacks = stacksWithEmptyCells.map((stack) =>
  stack.reverse().filter((char) => char !== ' '),
);

const commandsArr = commands.split('\n');
const regExp = /^move (\d+) from (\d) to (\d)$/;

for (const command of commandsArr) {
  const [amount, from, to] = command.match(regExp).slice(1, 4);

  const fromStack = stacks[from - 1];
  const toStack = stacks[to - 1];
  for (let i = 0; i < amount; i++) {
    toStack.push(fromStack.pop());
  }
}

const result = [];
for (const stack of stacks) {
  result.push(stack.pop());
}
console.log(result.join(''));
