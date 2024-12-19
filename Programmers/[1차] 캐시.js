function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;
  let answer = 0;
  let cache = [];

  for (let i = 0; i < cities.length; i++) {
    city = cities[i].toLowerCase();

    let idx = cache.indexOf(city);

    if (idx === -1) {
      if (cache.length >= cacheSize) cache.shift();
      answer += 5;
    } else {
      cache.splice(idx, 1);
      answer += 1;
    }
    cache.push(city);
  }
  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
