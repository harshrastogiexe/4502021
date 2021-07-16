const Queue = require("../Queue");

class MatrixGraph {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get size() {
    return this.matrix.length;
  }

  get rowCount() {
    return this.matrix.length;
  }

  get coloumCount() {
    return this.matrix[0].length;
  }

  isConnected(u, v) {
    return !!this.matrix[u][v];
  }

  getAdjecent(u) {
    const connected = [];
    this.matrix[u].forEach((val, index) => val && connected.push(index));
    return connected;
  }

  degree(u) {
    return this.matrix[u].reduce((count = 0, val) => (val ? count + 1 : count));
  }

  connect(u, v) {
    this.matrix[u][v] = 1;
  }

  remove(u, v) {
    this.matrix[u][v] = 0;
  }

  add(edges = new Array(this.size + 1).fill(0)) {
    if (edges.length !== this.size + 1) throw Error("Invalid Input");
    this.matrix.push(edges);
    this.matrix.forEach((row, index) => {
      if (index < this.size - 1) row.push(edges[index]);
    });
  }

  convert() {
    const list = [];
    let index = 0;
    this.matrix.forEach(() => {
      list.push(this.getAdjecent(index++));
    });
    return list;
  }
}

class ListGraph {
  constructor(list = []) {
    this.list = list;
  }

  get size() {
    return this.list.length;
  }

  isConnected(u, v) {
    return !!this.list[u][v];
  }

  getAdjecent(u) {
    return this.list[u];
  }

  inDegree(u) {
    let count = 0;
    this.list.forEach((adjecent) => adjecent.includes(u) && count++);
    return count;
  }

  degree(u) {
    return this.list[u].length;
  }

  connect(u, v) {
    this.list[u].push(v);
    const vertices = this.list[u];
    const smaller = (i) => vertices[i] < vertices[i - 1];
    for (let i = vertices.length - 1; i >= 0 && smaller(i); i--)
      [vertices[i], vertices[i - 1]] = [vertices[i - 1], vertices[i]];
  }

  disonnect(u, v) {
    const position = this.list[u].indexOf(v);
    if (position === -1) return;

    for (let i = position + 1; i < this.list[u].length; i++) {
      this.list[u][i - 1] = this.list[u][i];
    }

    this.list[u].pop();
  }

  forEachEdge(callback) {
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.list[i].length; j++) {
        callback(i, this.list[i][j]);
      }
    }
  }

  add(vertex = []) {
    this.list.push(vertex);
  }

  _generateVisitedArray() {
    return new Array(this.size).fill(false);
  }

  bfs(callback, arrayVisited, source = 0) {
    const visited = arrayVisited || this._generateVisitedArray();
    const queue = new Queue();
    queue.enQueue(source);
    visited[source] = true;

    while (!queue.isEmpty) {
      const vertex = queue.deQueue();
      callback(vertex);

      this.getAdjecent(vertex).forEach((vertex) => {
        if (visited[vertex]) return;
        visited[vertex] = true;
        queue.enQueue(vertex);
      });
    }
  }

  dfs(callback, visitedArray, source = 0) {
    const visited = visitedArray || this._generateVisitedArray();

    const traverse = (start = source) => {
      visited[start] = true;
      callback(start);

      for (const vertex of this.getAdjecent(start)) {
        !visited[vertex] && traverse(vertex);
      }
    };

    traverse();
  }

  dfsDissconnected() {
    let visited = this._generateVisitedArray();
    for (let vertex in this.list)
      !visited[vertex] && this.dfs(console.log, visited);
  }

  bfsDisconnected() {
    let visited = this._generateVisitedArray();
    this.list.forEach(
      (_, index) => !visited[index] && this.bfs(console.log, visited)
    );
  }

  get isCyclic() {
    const visited = this._generateVisitedArray();
    const queue = new Queue();

    queue.enQueue(0);
    visited[0] = true;

    while (!queue.isEmpty) {
      const vertex = queue.deQueue();

      for (const adjecent of this.getAdjecent(vertex)) {
        if (!visited[vertex]) {
          queue.enQueue(adjecent);
        }
      }
    }
    return false;
  }

  static topologicalSortingDFS(graph = new ListGraph()) {
    const stack = [];
    const visited = graph._generateVisitedArray();

    graph.list.forEach(
      (_, vertex) =>
        !visited[vertex] && graph.dfs(() => stack.push(vertex), visited)
    );

    while (stack.length) {
      console.log(stack.pop());
    }
  }

  static topologicalSortingBFS(graph = new ListGraph()) {
    const indegrees = graph.list.map((_, index) => graph.inDegree(index));
    const queue = new Queue();
    const topologicalArray = [];

    indegrees.forEach((degree, vertex) => !degree && queue.enQueue(vertex));

    while (!queue.isEmpty) {
      const vertex = queue.deQueue();
      topologicalArray.push(vertex);
      graph.getAdjecent(vertex).forEach((adjecent) => {
        --indegrees[adjecent] === 0 && queue.enQueue(adjecent);
      });
    }

    return topologicalArray;
  }

  get isCyclic() {
    const indegrees = this.list.map((_, index) => this.inDegree(index));
    const queue = new Queue();
    let count = 0;
    indegrees.forEach((degree, vertex) => !degree && queue.enQueue(vertex));

    while (!queue.isEmpty) {
      const vertex = queue.deQueue();
      this.getAdjecent(vertex).forEach((adjecent) => {
        --indegrees[adjecent] === 0 && queue.enQueue(adjecent);
      });
      count++;
    }

    return count !== this.size;
  }

  remove(u) {
    this.list[2] = [];

    this.list.forEach((row) => {
      const pos = row.indexOf(u);
      if (pos === -1) return;

      for (let i = pos + 1; i < row.length; i++) row[i - 1] = row[i];
      row.pop();
    });
  }
}

// const adjecentMatrix = [
//   [0, 1, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

// const graph = new MatrixGraph(adjecentMatrix);
// console.log(graph.convert());

module.exports = { ListGraph, MatrixGraph };
