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

  addNode(data) {
    function _findNode(current, node) {
      if (current.data === node.data) return null;
      if (current.data > node.data) {
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
    const node = new Node(data);
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
      if (node < current.data) {
        current = current.left;
      } else if (node > current.data) {
        current = current.right;
      } else if (node === current.data) {
        return current;
      } else {
        return null;
      }
    }
  }

  rmNode(data) {
    const removeNode = (node, data) => {
      //
      if (!node) return null;
      if (node.data === data) {
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
        // now temp is most left. switch data!
        node.data = temp.data;
        // remove most left node
        node.right = removeNode(node.right, temp.data);
        return node;
      } else if (node.data > data) {
        // means less
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
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
      visited.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
    // visited [ 3,2, 7, 1, 4, 10, 11 ]
  }
}

let bst = new BST();

bst.addNode(3);
bst.addNode(7);
bst.addNode(10);
bst.addNode(4);
bst.addNode(2);
bst.addNode(1);
bst.addNode(11);
// console.log(bst);
// console.log(bst.getMin());
// console.log(bst.getMax());
// console.log(bst.contains(2));
// console.log(bst.rmNode(7));
console.log(bst.BFS());
