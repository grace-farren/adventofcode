"use strict";

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

// Parse command from string and return object
const parseCommand = _command => {
  let command = _command.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
  return {command: command[1], x1: +command[2], y1: +command[3], x2: +command[4], y2: +command[5]};
};

// Map of our lights
let lights = new Uint8Array(1000 * 1000);

// Parse each command and change brightness of our lights
input.forEach(_command => {
  let command = parseCommand(_command);

  for (let x = command.x1; x <= command.x2; x++) {
    for (let y = command.y1; y <= command.y2; y++) {
      let index = 1000 * x + y;
      switch (command.command) {
        case 'turn on': 
          lights[index] += 1;
          break;
        case 'turn off':
          lights[index] = lights[index] === 0 ? 0 : lights[index] - 1;
          break;
        case 'toggle': 
          lights[index] += 2;
          break;
      }
    }
  }
});

// Calculate brightness
const result = lights.reduce((brightness, light) => brightness + light, 0);

console.log(result);