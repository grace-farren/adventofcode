'use strict'

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n'); 

const result = input.reduce((acc, line) => acc + (2+ line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').length - line.length), 0);
console.log(result)