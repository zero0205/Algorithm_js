function solution(n, t, m, p) {
    let answer = '';
    let sequence = ""
    let num = 0;
    while(sequence.length < t*m){
        const convertedNum = num.toString(n).toUpperCase();
        sequence += convertedNum;
        num++;
    }

    for(let i=0 ; i < t ; i++){
        answer += sequence[i*m+p-1];
    }
    return answer;
}

console.log(solution(2,4,2,1));
console.log(solution(16,16,2,1));
console.log(solution(16,16,2,2));