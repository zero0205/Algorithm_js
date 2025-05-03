function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);

    const bfs = (start)=>{
        const q = [start];
        visited[start] = true
        while(q.length>0){
            const now = q.shift();
            for(let i=0;i<n;i++){
                if(now === i) continue;
                if(computers[now][i] === 1 && !visited[i]){
                    q.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    for(let i=0;i<n;i++){
        if(!visited[i]){
            bfs(i)
            answer++;
        }
    }
    return answer;
}

function solution2(n, computers){
    let answer = 0;
    const visited = new Array(n).fill(false);

    const dfs =(node)=>{
        visited[node] = true;
        for(let i=0;i<n;i++){
            if(node===i) continue;
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }

    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i)
            answer++;
        }
    }
    return answer;
}

function solution3(n, computers){
    let answer = 0;
    const visited = new Array(n).fill(false);

    
    const dfs =(root)=>{
        const stack = [root];
        visited[root] = true;
        while(stack.length>0){
            const top = stack.pop();
            for(let i=0;i<n;i++){
                if(top === i) continue;
                if(computers[top][i] === 1 && !visited[i]){
                    stack.push(i)
                    visited[i] = true;
                }
            }
        }
    }

    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i)
            answer++;
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))