const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input[0]
  .trim()
  .split(" ")
  .map((val) => +val);
const itemCount = input[1]
  .trim()
  .split(" ")
  .map((val) => +val);
const roads = input.slice(2).map((val) =>
  val
    .trim()
    .split(" ")
    .map((val) => +val)
);

function solution2(n, m, r, itemCount, roads) {
  const distance = Array.from(new Array(n + 1), () =>
    new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 0; i <= n; i++) {
    distance[i][i] = 0;
  }

  for (const [a, b, l] of roads) {
    distance[a][b] = l;
    distance[b][a] = l;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (distance[i][j] > distance[i][k] + distance[k][j]) {
          distance[i][j] = distance[i][k] + distance[k][j];
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let itemsSum = 0;
    for (let j = 1; j <= n; j++) {
      if (distance[i][j] <= m) {
        itemsSum += itemCount[j - 1];
      }
    }
    answer = Math.max(answer, itemsSum);
  }

  return answer;
}

console.log(solution2(n, m, r, itemCount, roads));
