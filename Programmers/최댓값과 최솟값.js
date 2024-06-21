// function solution(s) {
//   var answer = "";
//   const arr = s.split(" ").map((num) => +num);
//   const max_num = Math.max(...arr);
//   const min_num = Math.min(...arr);
//   answer = [min_num, max_num].join(" ");
//   return answer;
// }

function solution(s) {
  var answer = "";
  const arr = s.split(" ").map((num) => +num);
  const max_num = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  const min_num = arr.reduce((a, b) => Math.min(a, b), Infinity);
  answer = [min_num, max_num].join(" ");
  return answer;
}
