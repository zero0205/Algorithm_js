const dfs = (visit_num, visited, now, graph) => {
  if (visit_num == graph.length) {
    return;
  }
  dfs_path.push(now); // 현재 방문 노드
  visited[now] = true;
  for (const nx of graph[now]) {
    if (!visited[nx]) {
      dfs(visit_num + 1, visited, nx, graph);
    }
  }
};

const bfs = (n, graph, start) => {
  let q = [start];
  let visited = new Array(n + 1).fill(false);
  visited[start] = true;

  let bfs_path = [start];

  while (q.length > 0) {
    now = q.shift();
    for (const nx of graph[now]) {
      if (!visited[nx]) {
        q.push(nx);
        visited[nx] = true;
        bfs_path.push(nx);
      }
    }
  }
  return bfs_path;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map((num) => +num);
// 간선 연결 정보
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map((num) => +num);
  graph[a].push(b);
  graph[b].push(a);
}
// 간선 연결 정보 정렬
graph.forEach((e) => e.sort((a, b) => a - b));

// DFS
let visited = new Array(n + 1).fill(false);
dfs_path = [];
dfs(1, visited, v, graph, dfs_path);
// BFS
let bfs_path = bfs(n, graph, v);

console.log(dfs_path.join(" "));
console.log(bfs_path.join(" "));
