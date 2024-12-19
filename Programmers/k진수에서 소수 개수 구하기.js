function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  // 0으로 split
  const numArr = n.toString(k).split("0");
  // 에라토스테네스의 체 실행 & 소수 판별해줄 함수 리턴
  for (const num of numArr) {
    isPrime(parseInt(num)) && answer++;
  }
  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
