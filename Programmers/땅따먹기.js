function solution(land) {
    let answer = 0;
    const n = land.length;

    const dp = Array.from(new Array(n), ()=>new Array(4).fill(0));
    for(let i = 0;i < 4;i++){
        dp[0][i] = land[0][i];
    }

    // DP
    for(let i = 1 ; i < n ; i++){
        for(let j = 0;j<4;j++){
            for(let k=0;k<4;k++){
                if(j==k) continue;
                dp[i][j] = Math.max(dp[i-1][k]+land[i][j], dp[i][j]);
            }
        }
    }

    answer = Math.max(...dp[n-1]);
    return answer;
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))