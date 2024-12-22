const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  popleft() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      return null;
    }
  }
}

function solution(n, m, arr) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  visited[0][0] = true;
  const que = new Queue();
  que.push([0, 0, 1]);
  while (que.size > 0) {
    const [x, y, cnt] = que.popleft();
    if (x === n - 1 && y === m - 1) return cnt;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        arr[nx][ny] === "1"
      ) {
        visited[nx][ny] = true;
        que.push([nx, ny, cnt + 1]);
      }
    }
  }
}

const [n, m] = input[0].split(" ").map((value) => +value);
console.log(solution(n, m, input.slice(1)));
