const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim(); // 한 개 입력 받을 때
const input_line = fs.readFileSync(filePath).toString().split(" "); // 입력 값이 한 줄
const input_lines = fs.readFileSync(filePath).toString().trim().split("\n"); // 입력 값이 여러 줄
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);
const [n2, ...arr2] = fs.readFileSync(filePath).toString().trim().split("\n");
