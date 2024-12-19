const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// a와 b 사이의 거리 구하기
const getLineLength = (a, b) => {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
};

const isSquare = (arr) => {
  const points = arr.map((val) =>
    val
      .trim()
      .split(" ")
      .map((val) => +val)
  );

  // 각 점들 간의 거리 구하기
  const lines = [];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      lines.push(getLineLength(points[i], points[j]));
    }
  }

  lines.sort((a, b) => a - b); // 정렬

  if (
    lines[0] === lines[1] &&
    lines[1] === lines[2] &&
    lines[2] === lines[3] &&
    lines[4] === lines[5]
  )
    return 1;
  else return 0;
};

for (let tc = 0; tc < +n; tc++) {
  console.log(isSquare(arr.slice(tc * 4, tc * 4 + 4)));
}
