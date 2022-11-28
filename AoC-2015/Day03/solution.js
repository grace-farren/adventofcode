"use strict";

const fs = require("fs");

const [...lines] = fs
  .readFileSync("sampledata.txt", { encoding: "utf-8" })
  .toString()
  .trim()
  .split("");

let x = 0;
let y = 0;
let visited = { "0,0": true };
let santa = [];
let robo = [];
let santaVisited = { "0,0": true };
let roboVisited = { "0,0": true };

function housesVisited() {
  for (const instruction of lines) {
    if (instruction === "^") y--;
    if (instruction === "v") y++;
    if (instruction === ">") x++;
    if (instruction === "<") x--;
    visited[[x, y]] = true;
  }
  // console.log(Object.keys(visited));
  // console.log(Object.keys(visited).length);
}

housesVisited();

function visitedBy() {
  for (let i = 0; i < lines.length; i++) {
    i++;
    santa.push(lines[i]);
  }
  for (let i = -1; i < lines.length - 1; i++) {
    i++;
    robo.push(lines[i]);
  }
}

visitedBy();
console.log(santa);
console.log(robo);

function housesVisitedBySanta() {
  for (const instruction of santa) {
    if (instruction === "^") y++;
    if (instruction === "v") y--;
    if (instruction === ">") x++;
    if (instruction === "<") x--;
    santaVisited[[x, y]] = true;
  }
  console.log(Object.keys(santaVisited));
}
housesVisitedBySanta();

function housesVisitedByRobo() {
  for (const instruction of robo) {
    if (instruction === "^") y++;
    if (instruction === "v") y--;
    if (instruction === ">") x++;
    if (instruction === "<") x--;
    roboVisited[[x, y]] = true;
  }
  console.log(Object.keys(roboVisited));
}
// console.log(Object.keys(visited).length);
housesVisitedByRobo();
