class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }
}

class Queue {
  constructor(maxSize) {
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.maxSize = maxSize;
  }

  push(value) {
    if (this.size >= this.maxSize) return;

    const newNode = new Node(value);
    if (this.head) {
      this.tail.setNext(newNode);
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  pop() {
    this.head = this.head.next;
    this.size--;
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [n, ...input_data] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((num) => +num);

const q = new Queue(n);
let idx = 0;

while (1) {
  if (input_data[idx] === -1) break;
  else if (input_data[idx] === 0) q.pop();
  else q.push(input_data[idx]);
  idx++;
}

if (q.size === 0) console.log("empty");
else {
  const answer = [];
  let now = q.head;
  for (let j = 0; j < q.size; j++) {
    answer.push(now.value);
    now = now.next;
  }
  console.log(answer.join(" "));
}
