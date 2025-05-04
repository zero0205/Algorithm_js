function solution(user_id, banned_id) {
  let answer = new Set();

  const get_pattern = (id) => {
    const transformed = id.replace(/\*/g, ".");
    return new RegExp(`^${transformed}$`);
  };

  const check_banned = (pattern) => {
    return user_id.filter((id) => pattern.test(id));
  };

  const bt = (idx, banned_set) => {
    if (idx === banned_id.length) {
      answer.add([...banned_set].sort().join("/"));
      return;
    }

    for (const id of candidates[idx]) {
      if (!banned_set.has(id)) {
        banned_set.add(id);
        bt(idx + 1, banned_set);
        banned_set.delete(id);
      }
    }
  };

  const candidates = [];
  for (const banned of banned_id) {
    const p = get_pattern(banned);
    candidates.push(check_banned(p));
  }

  bt(0, new Set());

  return answer.size;
}

console.log(
  solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])
);
//2
console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"]
  )
);
//2
console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"]
  )
);
//3
