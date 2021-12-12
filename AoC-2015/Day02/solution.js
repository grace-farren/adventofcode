"use strict";

const fs = require("fs");

const lines = fs
  .readFileSync("inputdata.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

const dimensions = [...lines];

let sideOne = 0;
let sideTwo = 0;
let sideThree = 0;
let slack = 0;
let total = 0;
let presentDim = {};

let shortestSideOne = 0;
let shortestSideTwo = 0;
let presentRibbon = 0;
let bowRibbon;
let totalRibbon = 0;

function slackFunction() {
  slack = 0;
  if (sideOne <= sideTwo && sideOne <= sideThree) {
    slack = sideOne / 2;
  } else if (sideTwo <= sideOne && sideTwo <= sideThree) {
    slack = sideTwo / 2;
  } else if (sideThree <= sideOne && sideThree <= sideTwo) {
    slack = sideThree / 2;
  }
}

function partOne() {
  for (const x of dimensions) {
    const [l, w, h] = x.split("x");
    presentDim = { l: [l], w: [w], h: [h] };
    sideOne = 2 * presentDim.l * presentDim.w;
    sideTwo = 2 * presentDim.w * presentDim.h;
    sideThree = 2 * presentDim.h * presentDim.l;
    slackFunction();
    total += sideOne + sideTwo + sideThree + slack;
  }
  // console.log(total);
  // console.log(presentDim);
}

partOne();

function shortestSide() {
  const length = Number(presentDim.l);
  const width = Number(presentDim.w);
  const height = Number(presentDim.h);
  if (length <= width && length <= height) {
    shortestSideOne = length;
    if (width <= height) {
      shortestSideTwo = width;
    } else {
      shortestSideTwo = height;
    }
  } else if (width <= length && width <= height) {
    shortestSideOne = width;
    if (length <= height) {
      shortestSideTwo = length;
    } else {
      shortestSideTwo = height;
    }
  } else if (height <= length && height <= width) {
    shortestSideOne = height;
    if (length <= width) {
      shortestSideTwo = length;
    } else {
      shortestSideTwo = width;
    }
  }
}

function partTwo() {
  for (const x of dimensions) {
    const [l, w, h] = x.split("x");
    presentDim = { l: [l], w: [w], h: [h] };
    shortestSide();
    presentRibbon =
      Number(shortestSideOne) +
      Number(shortestSideOne) +
      Number(shortestSideTwo) +
      Number(shortestSideTwo);
    bowRibbon = presentDim.l * presentDim.w * presentDim.h;
    totalRibbon += presentRibbon + bowRibbon;
  }
  console.log(totalRibbon);
}
partTwo();
