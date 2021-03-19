class MaxBinaryHeaps {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (!this.values.length) {
      this.values.push(val);
      return this;
    }
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (parentIdx >= 0) {
      let parent = this.values[parentIdx];
      let addedElement = this.values[idx];
      if (parent < addedElement) {
        // swap
        this.values[parentIdx] = addedElement;
        this.values[idx] = parent;
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      } else {
        parentIdx = -1;
      }
    }

    return this;
  }
  extractMac() {
    // swap first node with last node
    //  pop last node
    // swap first node with larger node until there no children node left unless firstnode is bigger than both
    const heaps = this.values;
    let end = heaps.pop();
    if (!heaps.length) {
      heaps.pop();
      return heaps;
    }

    heaps[0] = end;
    this.bubbleDown();
    return heaps;
  }

  bubbleDown() {
    let heaps = this.values;
    let parentIdx = 0;

    while (true) {
      let leftIdx = 2 * parentIdx + 1;
      let rightIdx = 2 * parentIdx + 2;
      let parentEl = heaps[parentIdx];
      let leftEl = heaps[leftIdx];
      let rightEl = heaps[rightIdx];

      if (leftEl && rightEl) {
        // both exist
        if (leftEl > rightEl && parentEl < leftEl) {
          heaps[parentIdx] = leftEl;
          heaps[leftIdx] = parentEl;
          parentIdx = leftIdx;
        } else if (leftEl < rightEl && parentEl < rightEl) {
          heaps[parentIdx] = rightEl;
          heaps[rightIdx] = parentEl;
          parentIdx = rightIdx;
        } else {
          break;
        }
      } else if (leftEl && parentEl < leftEl) {
        heaps[parentIdx] = leftEl;
        heaps[leftIdx] = parentEl;
        parentIdx = leftIdx;
      } else if (rightEl && parentEl < rightEl) {
        heaps[parentIdx] = rightEl;
        heaps[rightIdx] = parentEl;
        parentIdx = rightIdx;
      } else {
        break;
      }
    }
    return this;
    //   2n + 1 and 2n + 2
  }
}

// i 7 parent 3
// i 3 parent 1
// i 1 parent 0
// i 0 parent 0.5
let heaps = new MaxBinaryHeaps();
heaps.insert(4);
heaps.insert(11);
heaps.insert(2);
heaps.insert(1);
heaps.insert(3);
heaps.insert(5);
heaps.insert(0);
heaps.insert(7);
heaps.insert(6);
heaps.insert(72);
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
console.log(heaps.extractMac());
