// class PriorityQueue {
//   constructor() {
//     this.q = [];
//   }

//   push(val) {
//     this.q.push(val);
//     let cur = this.q.length - 1;
//     while (cur > 0) {
//       const parent = Math.floor((cur - 1) / 2);
//       if (this.q[parent] <= this.q[cur]) break;

//       [this.q[parent], this.q[cur]] = [this.q[cur], this.q[parent]];
//       cur = parent;
//     }
//   }

//   pop() {
//     if (this.q.length === 0) return undefined;
//     if (this.q.length === 1) return this.q.pop();

//     const returnValue = this.q[0];
//     this.q[0] = this.q.pop();
//     let cur = 0;
//     while (true) {
//       const leftChild = cur * 2 + 1;
//       const rightChild = cur * 2 + 2;
//       if (leftChild >= this.q.length) break;
//       let smallest = cur;
//       if (this.q[leftChild] < this.q[smallest]) {
//         smallest = leftChild;
//       }
//       if (rightChild < this.q.length && this.q[rightChild] < this.q[smallest]) {
//         smallest = rightChild;
//       }
//       if (cur === smallest) break;
//       [this.q[cur], this.q[smallest]] = [this.q[smallest], this.q[cur]];
//       cur = smallest;
//     }

//     return returnValue;
//   }

//   get size() {
//     return this.q.length;
//   }
// }

// function solution(n, roads, sources, destination) {
//   const graph = {};
//   for (const [a, b] of roads) {
//     graph[a] = graph[a] || [];
//     graph[a].push(b);
//     graph[b] = graph[b] || [];
//     graph[b].push(a);
//   }

//   const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
//   dist[destination] = 0;
//   const q = new PriorityQueue();
//   q.push([0, destination]);
//   while (q.size > 0) {
//     const [d, node] = q.pop();
//     for (const nx of graph[node]) {
//       if (dist[nx] > d + 1) {
//         dist[nx] = d + 1;
//         q.push([dist[nx], nx]);
//       }
//     }
//   }

//   const answer = sources.map((val) =>
//     dist[val] !== Number.MAX_SAFE_INTEGER ? dist[val] : -1
//   );

//   return answer;
// }

function solution(n, roads, sources, destination) {
  const graph = Array.from(new Array(n + 1), () => []);
  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const q = [destination];
  const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dist[destination] = 0;
  while (q.length > 0) {
    const now = q.shift();
    for (const nx of graph[now]) {
      if (dist[nx] > dist[now] + 1) {
        dist[nx] = dist[now] + 1;
        q.push(nx);
      }
    }
  }
  const answer = sources.map((val) =>
    dist[val] !== Number.MAX_SAFE_INTEGER ? dist[val] : -1
  );
  return answer;
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);
// [1,2]

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
);
// [2,-1, 0]
