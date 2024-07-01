// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(
    line
      .trim()
      .split(/\s+/)
      .filter((item) => item.length > 0).length
  );
}).on("close", function () {
  process.exit();
});
