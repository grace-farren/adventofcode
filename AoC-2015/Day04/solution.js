"use strict";

const fs = require("fs");
const path = require("path");

const cryto = require('crypto');
const { log } = require("console");

const key = fs.readFileSync("inputdata.txt", { encoding: "utf-8" }).toString().trim();

let hash;
let stringToHash;

let i = -1;
/* PART ONE
do {
  i++;
  stringToHash = `${key}${i}`;
  hash = cryto.createHash('md5').update(stringToHash).digest('hex');
} while (hash.substring(0, 5) !== '00000');
*/ 

do {
  i++;
  stringToHash = `${key}${i}`;
  hash = cryto.createHash('md5').update(stringToHash).digest('hex');
} while (hash.substring(0, 6) !== '000000');

console.log(`MD5 of ${stringToHash} is ${hash}`);
console.log(`Answer is ${i}`);
