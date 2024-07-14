const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let total = (n * (n + 1)) / 2;
  if (total % 2 === 1) return 0;

  let dp = Array.from(new Array(n + 1), () => new Array(total / 2 + 1).fill(0));
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= total / 2; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - i >= 0) {
        dp[i][j] += dp[i - 1][j - i];
      }
    }
  }
  return dp[n][total / 2] / 2;
}

console.log(solution(n));
