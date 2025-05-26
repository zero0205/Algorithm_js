const bfs = (maps, start, end) => {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const q = [[...start, 0]];
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  visited[start[0]][start[1]] = true;
  while (q.length > 0) {
    const [x, y, d] = q.shift();
    if (x === end[0] && y === end[1]) return d;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny] && maps[nx][ny] !== "X") {
        q.push([nx, ny, d + 1]);
        visited[nx][ny] = true;
      }
    }
  }
  return -1;
};

function solution(maps) {
  let start = undefined;
  let end = undefined;
  let lever = undefined;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "E") end = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
    }
  }

  // 시작점-레버 최단거리 구하기
  const startToLeverDistance = bfs(maps, start, lever);
  if (startToLeverDistance === -1) return -1;
  // 레버-도착점 최단거리 구하기
  const leverToEndDistance = bfs(maps, lever, end);

  return leverToEndDistance === -1
    ? -1
    : startToLeverDistance + leverToEndDistance;
}
