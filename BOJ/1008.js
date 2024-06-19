const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((value) => +value);

const [a, b] = input;

console.log(a / b);
