function solution(s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length > 0 && ch === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(ch);
    }
    console.log(stack);
  }
  return stack.length === 0 ? 1 : 0;
}

solution("baabaa");
