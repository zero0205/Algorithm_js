let fs = require("fs");
let filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let [n, word] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, word) {
  let cow = Array.from(new Array(n), () => new Array(3).fill(0));

  if (word[0] === "C") {
    cow[0][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    cow[i] = cow[i - 1].map((value) => value);
    switch (word[i]) {
      case "C":
        cow[i][0]++;
        break;
      case "O":
        cow[i][1] += cow[i - 1][0];
        break;
      case "W":
        cow[i][2] += cow[i - 1][1];
    }
  }
  return cow[n - 1][2];
}

console.log(solution(n, word));
