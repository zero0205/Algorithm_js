const fs = require("fs");
const path = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(path)
  .toString()
  .split(/\s/)
  .filter((val) => val !== "");

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const ans = arr.map((val) => +reverseString(val)).sort((a, b) => a - b);
ans.map((val) => console.log(val));
