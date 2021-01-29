class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val === newNode.val) {
        return;
      }
      if (newNode.val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  contain(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    if (!node) return;
    const queue = [node];
    const visited = [];
    while (queue.length > 0) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  DFP() {
    const DFPHelper = (current, visited) => {
      if (!current) return visited;
      visited.push(current.val);
      if (current.left) DFPHelper(current.left, visited);
      if (current.right) DFPHelper(current.right, visited);
    };

    let visited = [];
    let current = this.root;
    return DFPHelper(current, visited);
  }
}

//    5
//  2   10
// 3   6   20

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(2);
tree.insert(10);
tree.insert(12);
tree.insert(15);
tree.insert(1);
tree.insert(6);
tree.insert(20);
// console.log("tree   ::", tree);
console.log(tree.DFP());
