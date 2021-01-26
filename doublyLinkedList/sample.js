class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      // this.head.next = this.tail.prev
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.length) return;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  get(i) {
    if (this.length <= i || i < 0) return;
    let middle = Math.ceil(this.length / 2);
    if (middle > i) {
      let current = this.head;
      let counter = 0;
      while (counter !== i) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while (counter !== i) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }

  set(i, val) {
    let foundNode = get(i);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    if (this.length < i || i < 0) return;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(i - 1);
    let afterNode = prevNode.next;
    if (prevNode) {
      // let temp = prevNode
      newNode.next = prevNode.next;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(i) {
    if (this.length < i || i < 0) return;
    if (i === 0) return !!this.shift();
    if (i === this.length - 1) return !!this.pop();
    let removedNode = this.get(i);
    if (removedNode) {
      // let temp = prevNode
      (removedNode.next.prev = removedNode.prev),
        (removedNode.prev.next = removedNode.next);
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }
}

let instance1 = new doublyLinkedList();
instance1.push(0);
instance1.push(1);
instance1.push(2); /// will delete
instance1.push(3);
instance1.push(4);
instance1.push(5);
console.log(instance1);
