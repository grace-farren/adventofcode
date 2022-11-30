"use strict"

 const fs = require('fs');
 const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
 const commandRegex = /[A-Z]+/g;
 const argumentsRegex = /[a-z0-9]+/g;

 // Our parsed wires in format {wire: value} or {wire: instructions}
 const wires = new Map();

 // Dictionare of our bitwise methods
 const bitwiseMethods = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: a => ~a,
  LSHIFT: (a, b) => a << b, 
  RSHIFT: (a, b) => a >> b
 };


 // Parse instruction from input and return object with command, arguments and destination wire
 const parseInstruction = instruction => {
  const command = instruction.match(commandRegex);
  const args = instruction.match(argumentsRegex);
  const destination = args.pop();

  return {
    command: command && command[0],
    args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
    destination: destination
  };
};

// Calculate value for one of the wires (recursively)
const calculateWire = wireName => {
  const wire = wires.get(wireName);

  if (typeof wireName === 'number') return wireName;
  if (typeof wire === 'number') return wire;
  if (typeof wire === 'undefined') return undefined;

  if (!wire.command) {
    wires.set(wireName, calculateWire(wire.args[0]));
  } else {
    wires.set(wireName, bitwiseMethods[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
  }

  return wires.get(wireName);
};

// Fill wires with parsed instructions and their future values
input.forEach(instruction => {
  const parsedInstruction = parseInstruction(instruction);
  wires.set(parsedInstruction.destination, {command: parsedInstruction.command, args: parsedInstruction.args});
});

 console.log(calculateWire('a'))