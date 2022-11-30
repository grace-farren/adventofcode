'use strict'

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n'); 

const result = input.reduce((acc, line) => acc + (line.length -eval(line).length), 0);
console.log(result)