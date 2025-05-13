function solution(sequence) {
  let answer = Number.NEGATIVE_INFINITY;

  let odd = 0;
  let even = 0;
  for (let i = 0; i < sequence.length; i++) {
    const odd_pulse = i % 2 === 1 ? 1 : -1;
    const even_pulse = i % 2 === 1 ? -1 : 1;
    odd = Math.max(odd_pulse * sequence[i], odd + odd_pulse * sequence[i]);
    even = Math.max(even_pulse * sequence[i], even + even_pulse * sequence[i]);
    answer = Math.max(answer, odd, even);
  }
  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
