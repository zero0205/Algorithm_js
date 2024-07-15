function solution(s) {
  var answer = [];
  s = s
    .substring(1, s.length - 1)
    .split("},{")
    .map((item) => item.replace(/\{|\}/g, ""));
  console.log(s);
  s.sort((a, b) => a.length - b.length);
  for (let i = 0; i < s.length; i++) {
    s[i].split(",").map((num) => {
      if (!answer.includes(+num)) {
        answer.push(+num);
      }
    });
  }
  return answer;
}

solution("{{20,111},{111}}");
