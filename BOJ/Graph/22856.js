const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .filter((item) => item != "")
  .map((item) => +item);

const graph = Array.from(Array(n + 1), () => new Array(2).fill(-1));
for (let i = 0; i < n; i++) {
  const root = arr[i * 3];
  const left = arr[i * 3 + 1];
  const right = arr[i * 3 + 2];

  graph[root][0] = left;
  graph[root][1] = right;
}

let answer = 0;
let visited = new Set();
let finished = false;

const inorder = (now) => {
  if (graph[now][0] !== -1 && !visited.has(graph[now][0])) {
    answer++;
    inorder(graph[now][0]);
  }

  visited.add(now);

  if (visited.size === n) {
    return;
  }

  if (graph[now][1] !== -1 && !visited.has(graph[now][1])) {
    answer++;
    inorder(graph[now][1]);
  }
  if (visited.size === n) {
    return;
  }
  answer++;
};

inorder(1);
console.log(answer);
