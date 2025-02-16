const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const [n, w, l, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .filter((item) => item != "")
  .map((item) => +item);

class TruckNode {
  constructor(weight) {
    this.next = null;
    this.weight = weight;
    this.dist = 0;
  }
}

class BridgeQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.weightSum = 0;
  }

  push(newNode) {
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size += 1;
    this.weightSum += newNode.weight;
  }

  pop() {
    if (this.head) {
      let first = this.head;
      this.head = this.head.next;
      this.weightSum -= first.weight;
      this.size -= 1;
      if (this.size === 0) {
        this.tail = null;
      }
    } else {
      return undefined;
    }
  }

  move() {
    let now = this.head;
    while (now) {
      now.dist += 1;
      now = now.next;
    }
  }
}

const solution = (n, w, l, trucks) => {
  const bridge = new BridgeQueue();
  let answer = 0;
  let i = 0;
  while (i < n) {
    if (bridge.size > 0 && bridge.head.dist == w) {
      bridge.pop();
    }
    if (bridge.weightSum + trucks[i] <= l) {
      bridge.push(new TruckNode(trucks[i]));
      i++;
    }
    bridge.move();
    answer++;
  }

  while (bridge.size > 0) {
    if (bridge.head.dist === w) {
      bridge.pop();
    }
    bridge.move();
    answer++;
  }
  return answer;
};

console.log(solution(n, w, l, arr));
