class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    // shift
    if (this.size === 0) return;
    let currentFirst = this.first;
    this.first = currentFirst.next;
    currentFirst.next = null;
    this.size--;
    if (this.size === 1) {
      this.last = null;
    }
    return currentFirst;
  }
}
let queue = new Queue();
// 1, 2, 3, 4
//
