class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  _findNode(current, node) {
    if (current.data === node.data) return null;
    if (current.data > node.data) {
      if (!current.left) {
        current.left = node;
        return;
      } else this._findNode(current.left, node);
    } else {
      if (!current.right) {
        current.right = node;
        return;
      } else this._findNode(current.right, node);
    }
  }

  addNode(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this._findNode(this.root, node);
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
    
    while(true) {
      if(node < current.data)
    }
  }
}

const bst = new BST();

bst.addNode(3);
bst.addNode(7);
bst.addNode(10);
bst.addNode(4);
bst.addNode(2);
bst.addNode(1);
console.log(bst);
console.log(bst.getMin());
console.log(bst.getMax());
