var Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (!this.head) return -1;
  let current = this.head;
  let count = 0;
  while (current) {
    if (count === index) return current.val;
    current = current.next;
    count++;
  }

  return -1;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;

  return this;
};

MyLinkedList.prototype.addAtIndex = function (i, val) {
  if (i < 0 || i > this.length) return false;
  if (i === this.length) return this.addAtTail(val);
  if (i === 0) return this.addAtHead(val);
  const newNode = new Node(val);
  let cur = this.head;
  for (let i = 0; i < i - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next ? cur.next : null;
  cur.next = newNode;
  this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!this.head) return -1;
  if (this.length <= index) return -1;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return this;
  }
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  current.next = current.next.next ? current.next.next : null;
  if (!current.next) this.tail = current;
  this.length--;
  return this;
};

let root = new MyLinkedList();
root.addAtTail(1);
root.addAtTail(2);
root.addAtTail(3);

// console.log(root);
// console.log(root.get(0));
// console.log(root.get(1));
// console.log(root.get(2));
// console.log(root.addAtHead(6));
// console.log(root.next);
// console.log(root.next.next);
// console.log(root.addAtTail(100));
console.log(root.deleteAtIndex(1));
console.log(root);
