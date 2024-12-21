function isAlpha(str) {
  return /^[A-Za-z]+$/.test(str);
}

function getFragment(str) {
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    const fragment = str.slice(i, i + 2).toLowerCase();
    if (!isAlpha(fragment)) continue;
    result.push(fragment);
  }
  return result;
}

function solution(str1, str2) {
  const str1Fragments = getFragment(str1);
  const str2Fragments = getFragment(str2);
  const set = new Set([...str1Fragments, ...str2Fragments]);

  let intersection = 0;
  let union = 0;

  set.forEach((frag) => {
    const cnt1 = str1Fragments.filter((value) => value === frag).length;
    const cnt2 = str2Fragments.filter((value) => value === frag).length;
    union += Math.max(cnt1, cnt2);
    intersection += Math.min(cnt1, cnt2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

// console.log(solution("FRANCE", "french"));
// console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
