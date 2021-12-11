"use strict";

const fs = require("fs");

const lines = fs
  .readFileSync("inputdata.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => x);

const [instructions] = [...lines];

let floor = 0;
let position = 0;
for (const instruction of instructions) {
  instruction == "(" ? floor++ : floor--;
  // console.log(floor);
  position++;
  if (floor == -1) {
    console.log(`${position} basement`);
    break;
  }

  // break;
}
