function solution(info, edges) {
  let answer = 0;

  const n = info.length;
  const graph = Array.from(new Array(n), () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
  }

  const visited = new Array(n).fill(false);

  const bt = (sheep, wolf) => {
    answer = Math.max(answer, sheep);
    for (const [s, e] of edges) {
      if (visited[s] && !visited[e]) {
        if (info[e] === 0) {
          visited[e] = true;
          bt(sheep + 1, wolf);
          visited[e] = false;
        } else if (info[e] === 1 && sheep > wolf + 1) {
          visited[e] = true;
          bt(sheep, wolf + 1);
          visited[e] = false;
        }
      }
    }
  };

  visited[0] = true;
  bt(1, 0);

  return answer;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
