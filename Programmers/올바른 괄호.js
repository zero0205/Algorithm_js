function solution(s) {
  let answer = true;

  const stack = [];
  for (const ch of s) {
    if (ch === "(") {
      stack.push("(");
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        answer = false;
        break;
      }
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
