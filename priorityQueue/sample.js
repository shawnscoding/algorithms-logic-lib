class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.queue.length - 1;
    const element = this.queue[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.queue[parentIdx];
      if (element.priority >= parent.priority) break;
      this.queue[parentIdx] = element;
      this.queue[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.queue[0];
    const end = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const element = this.queue[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.queue[idx] = this.queue[swap];
      this.queue[swap] = element;
      idx = swap;
    }
  }
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(4, 1);
priorityQueue.enqueue(3, 8);
priorityQueue.enqueue(3, 5);
priorityQueue.enqueue(2, 10);
console.log(priorityQueue);
