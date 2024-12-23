const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  setPrev(prev) {
    this.prev = prev;
  }

  setNext(next) {
    this.next = next;
  }

  getValue() {
    return this.value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.rear) {
      this.head.setPrev(newNode);
      this.rear.setNext(newNode);
      newNode.setPrev(this.rear);
      newNode.setNext(this.head);
    } else {
      newNode.setNext(newNode);
      newNode.setPrev(newNode);
      this.head = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  popNthFromHead(n) {
    for (let i = 0; i < n; i++) {
      this.head = this.head.next;
    }
    const poppedNode = this.head.prev;
    this.head.setPrev(poppedNode.prev);
    poppedNode.prev.setNext(this.head);
    this.size--;
    return poppedNode.getValue();
  }
}

function solution(n, k) {
  const answer = [];
  const doublyLL = new DoublyLinkedList();

  for (let i = 1; i <= n; i++) {
    doublyLL.push(i);
  }

  while (!doublyLL.isEmpty()) {
    answer.push(doublyLL.popNthFromHead(k));
  }

  return "<" + answer.join(", ") + ">";
}

console.log(solution(n, k));
