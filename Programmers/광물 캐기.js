function solution(picks, minerals) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = minerals.length;

  const MINERAL_TO_INDEX = {
    diamond: 0,
    iron: 1,
    stone: 2,
  };

  const FATIGUE_COST = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1],
  ];

  const bt = (mineralIdx, fatigue) => {
    if (mineralIdx >= n || picks.every((val) => val === 0)) {
      answer = Math.min(answer, fatigue);
      return;
    }
    for (let i = 0; i < 3; i++) {
      if (picks[i] > 0) {
        const newFatigue = minerals
          .slice(mineralIdx, Math.min(mineralIdx + 5, n))
          .reduce(
            (acc, cur) => acc + FATIGUE_COST[i][MINERAL_TO_INDEX[cur]],
            0
          );
        picks[i] -= 1;
        bt(mineralIdx + 5, fatigue + newFatigue);
        picks[i] += 1;
      }
    }
  };

  bt(0, 0);
  return answer;
}
