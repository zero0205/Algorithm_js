function solution(n,a,b)
{
    if(a>b){
        const temp = a
        a = b
        b = temp
    }

    let answer = 1;

    for(let i=0;i<Math.log2(n);i++){
        if(a%2 === 1 && Math.ceil(a/2) === Math.ceil(b/2)) break;
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer++;
    }

    return answer;
}

console.log(solution(8,4,7))