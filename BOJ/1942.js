const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr.forEach((item) => {
  let ans = 0;
  let [start, end] = item.split(" ");

  start = start.split(":").map((item) => +item);
  end = end.split(":").map((item) => +item);

  while (true) {
    // 3의 배수인지?
    let num = +start
      .map((item) => {
        if (item < 10) return "0" + item;
        else return item.toString();
      })
      .join("");

    if (num % 3 === 0) ans++;

    // 시간이 흘러 end까지 도달했는지
    let is_end = true;
    for (let i = 0; i < 3; i++) {
      if (start[i] !== end[i]) {
        is_end = false;
        break;
      }
    }
    if (is_end) break;

    // 1초 증가
    start[2]++;
    if (start[2] === 60) {
      start[1]++;
      start[2] = 0;
    }
    if (start[1] === 60) {
      start[0]++;
      start[1] = 0;
    }
    if (start[0] === 24) {
      start[0] = 0;
    }
  }
  console.log(ans);
});
