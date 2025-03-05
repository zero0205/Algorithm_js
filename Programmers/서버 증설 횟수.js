function solution(players, m, k) {
  let answer = 0; // 최소 서버 증설 횟수

  const servers = [];

  for (let time = 0; time < 24; time++) {
    // 한 번 증설한 서버는 k시간 동안 운영하고 그 이후에는 반납합니다.
    while (servers.length && time - servers[0].startTime >= k) {
      servers.shift();
    }

    // 어느 시간대의 이용자가 n x m명 이상 (n + 1) x m명 미만이라면 최소 n대의 증설된 서버가 운영 중이어야 합니다.
    const n = Math.floor(players[time] / m);
    if (servers.length < n) {
      const 증설횟수 = n - servers.length;
      for (let i = 0; i < 증설횟수; i++) {
        servers.push({ startTime: time });
      }

      answer += 증설횟수;
    }
  }

  return answer;
}
