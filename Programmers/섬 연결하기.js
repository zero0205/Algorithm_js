function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for (let i = 0; i < n; i++) {
    parent.push(i);
  }

  const findParent = (x) => {
    if (x !== parent[x]) {
      parent[x] = findParent(parent[x]);
    }
    return parent[x];
  };

  const union = (a, b) => {
    const aParent = findParent(a);
    const bParent = findParent(b);

    if (aParent === bParent) return false;

    if (aParent < bParent) {
      parent[bParent] = aParent;
    } else {
      parent[aParent] = bParent;
    }

    return true;
  };

  costs.sort((a, b) => a[2] - b[2]);
  let connected = 0;
  for (const [s, e, cost] of costs) {
    if (union(s, e)) {
      connected++;
      answer += cost;
    }
    if (connected === n - 1) break;
  }
  return answer;
}
