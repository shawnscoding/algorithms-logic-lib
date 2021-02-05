// one of patterns for graph data structure

class AdjacencyList {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    // console.log(Array(this.adjacencyList[v1]));
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    let result = this.adjacencyList[v1].filter((item) => item !== v2);
    let result2 = this.adjacencyList[v2].filter((item) => item !== v1);
    this.adjacencyList[v1] = result;
    this.adjacencyList[v2] = result2;
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

  DFS(v) {
    let result = [];
    let visited = {};
    const get = (v) => {
      let list = this.adjacencyList[v];
      visited[v] = true;
      result.push(v);
      let sortedList = this.sort(list);
      console.log("sortedList ::", sortedList);
      // extract
    };
    get(v);
  }
}

let list = new AdjacencyList();
list.addVertex("korea");
list.addVertex("japan");
list.addVertex("america");
list.addVertex("uk");
list.addEdge("america", "korea");
list.addEdge("korea", "japan");
list.addEdge("korea", "uk");
// list.removeVertex("america");
console.log(list.DFS("korea"));
