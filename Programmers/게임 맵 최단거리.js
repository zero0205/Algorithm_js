function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  visited[0][0] = true;
  const q = [];
  q.push({ x: 0, y: 0, cnt: 1 });
  while (q.length > 0) {
    const { x, y, cnt } = q.shift();
    if (x === n - 1 && y === m - 1) {
      return cnt;
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        q.push({ x: nx, y: ny, cnt: cnt + 1 });
      }
    }
  }
  return -1;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
