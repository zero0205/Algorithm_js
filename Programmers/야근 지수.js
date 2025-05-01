function solution(n, works) {
    let answer = 0;
    works.sort((a,b)=>b-a)

    let idx = 0;
    while(n > 0){
        --works[idx++];
        n--;
        if (works[idx-1]<0){
            return 0;
        }
        if(idx == works.length || works[idx-1] >= works[idx]){
            idx = 0;
        }
    }

    for(const w of works){
        answer += w**2;
    }
    return answer;
}

console.log(solution(4, [4,3,3]))
console.log(solution(1, [2,1,2]))
console.log(solution(3, [1,1]))