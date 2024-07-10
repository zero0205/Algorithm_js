const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let board = arr.map((row) => {
  return row
    .trim()
    .split(" ")
    .map((item) => +item);
});

function solution(n, board) {
  let dp = Array.from(new Array(n), () => new Array(n).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j]) {
        // 오른쪽으로 이동
        if (j + board[i][j] < n) {
          dp[i][j + board[i][j]] = true;
        }
        // 아래로 이동
        if (i + board[i][j] < n) {
          dp[i + board[i][j]][j] = true;
        }
      }
    }
  }
  return dp[n - 1][n - 1];
}

console.log(solution(+n, board) ? "HaruHaru" : "Hing");
