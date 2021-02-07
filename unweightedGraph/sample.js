// one of patterns for graph data structure.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // should act as if shift for performance reason
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return;

    let oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    if (this.size === 1) {
      this.last = null;
    }
    return oldFirst;
  }
}

class AdjacencyList {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return this;
  }

  addEdge(v1, v2) {
    // console.log(Array(this.adjacencyList[v1]));
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }

  removeEdge(v1, v2) {
    let result = this.adjacencyList[v1].filter((item) => item !== v2);
    let result2 = this.adjacencyList[v2].filter((item) => item !== v1);
    this.adjacencyList[v1] = result;
    this.adjacencyList[v2] = result2;
    return this;
  }

  removeVertex(v) {
    //   first pop edges and use that to filter in other group
    while (this.adjacencyList[v].length) {
      let country = this.adjacencyList[v].pop();
      let res = this.adjacencyList[country].filter((item) => item !== v);
      this.adjacencyList[country] = res;
    }
    delete this.adjacencyList[v];

    return this;
  }

  sort(arr) {
    return arr.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  DFSR(v) {
    let result = [];
    let visited = {};
    const get = (v) => {
      if (!v) return;
      visited[v] = true;
      console.log(v);

      result.push(v);
      let list = this.adjacencyList[v];
      for (let i = 0; i < list.length; i++) {
        if (!visited[list[i]]) {
          get(list[i]);
        }
      }
    };
    get(v);

    return result;
  }

  DFSI(v) {
    // DFSI using custom stack data structure
    let result = [];
    let visited = {};
    let stack = new Stack();
    stack.push({ [v]: this.adjacencyList[v] });
    while (stack.size) {
      let popped = stack.pop().val;
      let key = Object.keys(popped)[0];
      let neighbors = Object.values(popped)[0];
      // console.log(key, neighbors);
      if (!visited[key]) {
        visited[key] = true;
        result.push(key);
        neighbors.forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push({ [neighbor]: this.adjacencyList[neighbor] });
          }
        });
      }
    }

    return result;
  }

  depthFirstIterative(start) {
    // DFSI using array as stack
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    // DFSI using array as stack
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    // queue [ a ] result [ a ]
    // queue [ b, c ] result [ a, b ]
    // queue [ c, d ] result [ a, b, c ]

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let list = new AdjacencyList();
list.addVertex("a");
list.addVertex("b");
list.addVertex("c");
list.addVertex("d");
list.addVertex("e");
list.addVertex("f");
list.addEdge("a", "b");
list.addEdge("a", "c");
list.addEdge("b", "d");
list.addEdge("c", "e");
list.addEdge("d", "e");
list.addEdge("d", "f");
console.log(list.addEdge("e", "f"));
console.log(list.depthFirstIterative("a"));
console.log(list.BFS("a"));
// list.removeVertex("america");
// console.log(list.DFS("korea"));
