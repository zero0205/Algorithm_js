function solution(relation) {
  const answer = [];

  const dfs = (idx, picked) => {
    if (idx === relation[0].length) {
      const result = relation.reduce((acc, cur) => {
        acc.add(cur.filter((_, i) => picked.has(i)).join("_"));
        return acc;
      }, new Set());

      if (result.size === relation.length) {
        answer.push(new Set(picked));
      }
      return;
    }

    dfs(idx + 1, picked);
    picked.add(idx);
    dfs(idx + 1, picked);
    picked.delete(idx);
  };

  dfs(0, new Set());

  const remove_set = new Set();

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      const intersection = new Set(
        [...answer[i]].filter((x) => answer[j].has(x))
      );

      if (intersection.size === answer[i].size) {
        remove_set.add(j);
      } else if (intersection.size === answer[j].size) {
        remove_set.add(i);
      }
    }
  }
  return answer.length - remove_set.size;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
