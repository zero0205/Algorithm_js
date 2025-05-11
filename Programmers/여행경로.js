function solution(tickets) {
  let answer = [];
  const graph = new Map();
  for (let i = 0; i < tickets.length; i++) {
    const [s, e] = tickets[i];
    if (!graph.has(s)) {
      graph.set(s, []);
    }
    graph.get(s).push([i, e]);
  }

  for (const [k, v] of graph.entries()) {
    v.sort((a, b) => a[1].localeCompare(b[1]));
  }

  const visited = new Array(tickets.length).fill(false);
  const dfs = (now, path) => {
    if (path.length === tickets.length + 1) {
      answer = [...path];
      return;
    }
    if (answer.length > 0 || !graph.has(now)) return;

    for (const [idx, nx] of graph.get(now)) {
      if (!visited[idx]) {
        visited[idx] = true;
        path.push(nx);
        dfs(nx, path);
        path.pop();
        visited[idx] = false;
      }
    }
  };

  dfs("ICN", ["ICN"]);
  return answer;
}

// console.log(
//   solution([
//     ["ICN", "JFK"],
//     ["HND", "IAD"],
//     ["JFK", "HND"],
//   ])
// );

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
