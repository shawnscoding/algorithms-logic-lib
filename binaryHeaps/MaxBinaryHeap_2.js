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
    const compareAndSwap = (_val, idx) => {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.root[parentIdx] > _val) {
        this.root.push(_val);
        return this.root;
      } else {
        // swap
        let temp = this.root[parentIdx];
        this.root[parentIdx] = _val;
        _val = temp;
        compareAndSwap(_val, parentIdx);
      }
    };
    return compareAndSwap(val, this.root.length);
  }
}
let heap = new MaxBinaryHeap();
heap.insert(4);
heap.insert(30);
heap.insert(3);
heap.insert(20);
console.log(heap);
