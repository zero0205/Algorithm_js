function solution(diffs, times, limit) {
  let answer = 0;

  const check = (level) => {
    const requireTime = [times[0]];
    for (let i = 1; i < diffs.length; i++) {
      const gap = diffs[i] - level;
      requireTime.push(times[i]);
      if (gap > 0) {
        const len = requireTime.length;
        requireTime[len - 1] += gap * (times[i] + times[i - 1]);
      }
    }
    const total = requireTime.reduce((acc, cur) => acc + cur, 0);
    return total <= limit;
  };

  let [l, r] = [1, Number.MAX_SAFE_INTEGER];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (check(mid)) {
      r = mid - 1;
      answer = mid;
    } else {
      l = mid + 1;
    }
  }

  return answer;
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));
console.log(
  solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012)
);
