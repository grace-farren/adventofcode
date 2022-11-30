"use strict";

const input = '1113122113';
const findRepetitionsRegex = /(\d)\1*/g;

const lookAndSay = input => input.match(findRepetitionsRegex).reduce((acc, char) => acc + `${char.length}${char[0]}`, '');

let result = input;
for (let i = 0; i < 50; i++) {
  result = lookAndSay(result);
}

console.log(result.length);