class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // should act as if shift for performance reason
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return;

    let oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    if (this.size === 1) {
      this.last = null;
    }
    return oldFirst;
  }
}

let stack = new Stack();
console.log(stack.push(0));
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
