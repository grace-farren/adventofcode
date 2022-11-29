"use strict";

const fs = require('fs');
const input = fs.readFileSync('./inputdata.txt').toString().split('\n');

// Dictionary of letters that need to be checked against the rules
const vowels = ['a', 'e', 'i', 'o', 'u'];
const doubleLetters = 'abcdefghijklmnopqrstuvwxyz'.split('').map(item => item + item);
const restrictedLetters = ['ab', 'cd', 'pq', 'xy'];

// Methods to check the rules
const isContainThreeVowels = string => string.split('').reduce((vowel, char) => vowels.indexOf(char) === -1 ? vowel : ++vowel, 0) >= 3;
const isContainDoubleLetter = string => doubleLetters.some(item => string.indexOf(item) !== -1);
const isContainRestrictedLetters = string => restrictedLetters.some(item => string.indexOf(item) !== -1);

const isNiceString = string => !!(isContainThreeVowels(string) && isContainDoubleLetter(string) && !isContainRestrictedLetters(string));

// Result is a composition of all methods above
const result = input.reduce((total, string) => isNiceString(string) ? ++total : total, 0);

console.log(result);