function solution(myString) {
  return myString
    .split("x")
    .filter((val) => val)
    .sort();
}

console.log(solution("axbxcxdx"));
console.log(solution("dxccxbbbxaaaa"));
