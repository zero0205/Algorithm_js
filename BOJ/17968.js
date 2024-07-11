let fs = require("fs");
let filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    let possible = new Array(1000).fill(true);
    // 불가능한 수 찾아서 possible 배열에 표시
    for (let k = 1; k <= Math.floor(n / 2); k++) {
      if (i - 2 * k >= 0) {
        let impossible = 2 * arr[i - k] - arr[i - 2 * k];
        possible[impossible] = false;
      } else break;
    }

    // 가능한 수 중 가장 작은 양의 정수 찾기
    for (let j = 1; j < 1000; j++) {
      if (possible[j]) {
        arr.push(j);
        break;
      }
    }
  }
  return arr[n];
}

console.log(solution(n));
