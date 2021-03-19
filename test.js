// Binary Heaps are used to implement Priority Queue
// rule of BH
// in max binary heap parent node is always greater than its child nodes
// A binary heap is as compact as possible.
class MaxBinaryHeap {
  constructor() {
    this.root = [];
  }

  insert(val) {
    //   get parent idx
    // compare if child is greater, swap
    // keep going until child is smaller than its parent
    if (!this.root.length) {
      this.root.push(val);
      return;
    }
    this.root.push(val);
    const compareAndSwap = (_val, idx) => {
      if (idx < 0) return this.root;
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.root[parentIdx];
      if (parent > _val) return this.root;
      else {
        // swap
        this.root[parentIdx] = _val;
        this.root[idx] = parent;
        compareAndSwap(_val, parentIdx);
      }
    };
    return compareAndSwap(val, this.root.length - 1);
  }
}
let heap = new MaxBinaryHeap();
heap.insert(4);
heap.insert(11);
heap.insert(2);
heap.insert(1);
heap.insert(3);
heap.insert(5);
heap.insert(0);
heap.insert(7);
heap.insert(6);
heap.insert(72);
console.log(heap);
