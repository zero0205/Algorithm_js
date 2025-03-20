function solution(board) {
  let answer = 0;

  const r = board.length;
  const c = board[0].length;
  const acc = Array.from(new Array(r + 1), () => new Array(c + 1).fill(0));

  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      if (board[i - 1][j - 1] === 1) {
        acc[i][j] =
          Math.min(acc[i - 1][j], acc[i][j - 1], acc[i - 1][j - 1]) + 1;
        answer = Math.max(answer, acc[i][j] ** 2);
      }
    }
  }

  return answer;
}

solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]);
