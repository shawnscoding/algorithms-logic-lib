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
    // if tree is wide, space complexity is bad since queue has to store many branches
    // but if tree is not wide but deep, BFS is efficient
  }

  DFPPreOrder() {
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      visited.push(current.val);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };
    traverse(current);
    // this returns array which can be used to restructure the tree later on
    return visited;
  }

  DFPPostOrder() {
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      visited.push(current.val);
    };
    traverse(current);
    return visited;
  }

  DFPInOrder() {
    // traverse first
    // if there is left  call helper fn and store
    // if there is right, call helper fn but store
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) traverse(current.left);
      visited.push(current.val);
      if (current.right) traverse(current.right);
    };

    traverse(current);

    // this method returns arrays in order
    return visited;
  }
}

// [3, ]
//    10
//  6   15
// 3   8   20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree);
// console.log(tree.BFS());
// console.log(tree.DFPPreOrder());
// console.log(tree.DFPPostOrder());
// console.log(tree.DFPInOrder());
