function solution(n, edge) {
  // 그래프 구성
  const graph = Array.from(new Array(n + 1), () => new Array());
  for (const e of edge) {
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  }

  // BFS
  let farthest_dist = 0;
  let farthest_nodes = new Set();
  const q = [[1, 0]];
  const visited = new Array(n + 1).fill(false);
  visited[1] = true;
  while (q.length > 0) {
    const [node, dist] = q.shift();

    if (dist > farthest_dist) {
      farthest_dist = dist;
      farthest_nodes = new Set([node]);
    } else if (dist === farthest_dist) {
      farthest_nodes.add(node);
    }

    for (const nx of graph[node]) {
      if (!visited[nx]) {
        q.push([nx, dist + 1]);
        visited[nx] = true;
      }
    }
  }

  return farthest_nodes.size;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
