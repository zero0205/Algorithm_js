function solution(enroll, referral, seller, amount) {
  const profits = {};
  for (const name of enroll) {
    profits[name] = 0;
  }

  const parent = {};
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  for (let i = 0; i < seller.length; i++) {
    let sellerName = seller[i];
    let profit = amount[i] * 100;

    while (sellerName !== "-" && profit > 0) {
      const distribute = Math.floor(profit * 0.1);

      const keep = profit - distribute;
      profits[sellerName] += keep;

      if (distribute === 0) break;

      sellerName = parent[sellerName];
      profit = distribute;
    }
  }

  return enroll.map((name) => profits[name]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
);
