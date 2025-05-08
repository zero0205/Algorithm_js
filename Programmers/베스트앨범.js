function solution(genres, plays) {
  let answer = [];
  const genreCnt = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (!genreCnt.has(genres[i])) {
      genreCnt.set(genres[i], 0);
    }
    genreCnt.set(genres[i], genreCnt.get(genres[i]) + plays[i]);
  }

  const sortedGenreCnt = Array.from(genreCnt.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  for (const [genre, _] of sortedGenreCnt) {
    const sortedGenre = genres
      .reduce((acc, cur, idx) => {
        if (cur === genre) {
          acc.push([idx, plays[idx]]);
        }
        return acc;
      }, [])
      .sort((a, b) => b[1] - a[1]);

    answer.push(sortedGenre[0][0]);
    if (sortedGenre.length > 1) {
      answer.push(sortedGenre[1][0]);
    }
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
