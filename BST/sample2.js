class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addNode(val) {
    function _findNode(current, node) {
      if (current.val === node.val) return null;
      if (current.val > node.val) {
        if (!current.left) {
          current.left = node;
          return;
        } else _findNode(current.left, node);
      } else {
        if (!current.right) {
          current.right = node;
          return;
        } else _findNode(current.right, node);
      }
    }
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      _findNode(this.root, node);
    }
    return this.root;
  }

  getMin() {
    let current = this.root;

    while (current.left) {
      current = current.left;
    }
    return current;
  }

  getMax() {
    let current = this.root;

    while (current.right) {
      current = current.right;
    }
    return current;
  }

  contains(node) {
    let current = this.root;

    while (true) {
      if (node < current.val) {
        current = current.left;
      } else if (node > current.val) {
        current = current.right;
      } else if (node === current.val) {
        return current;
      } else {
        return null;
      }
    }
  }

  rmNode(val) {
    const removeNode = (node, val) => {
      //
      if (!node) return null;
      if (node.val === val) {
        // no children
        if (!node.left && !node.right) return null;
        // if no left
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // store node to temp
        // go to right and find most left
        let temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        // now temp is most left. switch val!
        node.val = temp.val;
        // remove most left node
        node.right = removeNode(node.right, temp.val);
        return node;
      } else if (node.val > val) {
        // means less
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
    };

    this.root = removeNode(this.root, val);
    return this;
  }

  BFS() {
    // search left first and right
    // push left and right into queue and shift to visted
    let node = this.root;
    const queue = [node];
    const visited = [];
    while (queue.length) {
      let node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
    // visited [ 3,2, 7, 1, 4, 10, 11 ]
  }

  LCA(a, b) {
    // Lowest Common Ancestor
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    function func(current) {
      let result;
      if (current.val === max) {
        result = max;
      } else if (current.val === min) {
        result = min;
      } else if (current.val > min && current.val < max) {
        // means this is parent of children
        result = current;
      } else if (current.val > min && current.val > max) {
        // if current val is more than both, need to go left down, get small
        result = func(current.left);
      } else if (current.val < min && current.val < max) {
        // if current val is less than both, need to go right down, get big

        result = func(current.right);
      }
      return result;
    }
    return func(this.root);
  }
}

let bst = new BST();

bst.addNode(10);
bst.addNode(5);
bst.addNode(1);
bst.addNode(7);
bst.addNode(40);
bst.addNode(50);
// [10, 5, 1, 7, 40, 50]
//     10
//   5    40
// 1   7     50
// console.log(bst);
// console.log(bst.getMin());
// console.log(bst.getMax());
// console.log(bst.contains(2));
// console.log(bst.rmNode(7));
console.log(bst.LCA(1, 7));
// console.log(bst.BFS());
// console.log(bst.BFS());
