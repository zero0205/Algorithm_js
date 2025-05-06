function solution(n, stations, w) {
  let answer = 0;

  stations.unshift(-w);
  stations.push(n + w + 1);
  for (let i = 0; i < stations.length + 1; i++) {
    const gap = stations[i + 1] - stations[i] - 1;
    if (gap > w * 2) {
      answer += Math.ceil((gap - w * 2) / (w * 2 + 1));
    }
  }

  return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
