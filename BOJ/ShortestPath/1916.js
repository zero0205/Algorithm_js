const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const m = +input[1];

const path = Array.from(new Array(n + 1), () =>
  new Array(n + 1).fill(Infinity)
);

for (let i = 1; i <= n; i++) {
  path[i][i] = 0;
}

for (let i = 2; i < m + 2; i++) {
  const [start, end, cost] = input[i]
    .trim()
    .split(" ")
    .map((item) => +item);
  if (path[start][end] > cost) {
    path[start][end] = cost;
  }
}

const [department, destination] = input[input.length - 1]
  .trim()
  .split(" ")
  .map((item) => +item);

const dist = new Array(n + 1).fill(Infinity);
dist[department] = 0;
const visited = new Array(n + 1).fill(false);

const getMinNode = () => {
  let minNode = -1;
  let minCost = Infinity;
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && dist[i] < minCost) {
      minNode = i;
      minCost = dist[i];
    }
  }
  return minNode;
};

while (true) {
  const now = getMinNode();
  if (now === -1 || now === destination) break;

  visited[now] = true;

  for (let j = 1; j <= n; j++) {
    if (!visited[j] && path[now][j] !== Infinity) {
      dist[j] = Math.min(dist[j], dist[now] + path[now][j]);
    }
  }
}

console.log(dist[destination]);
