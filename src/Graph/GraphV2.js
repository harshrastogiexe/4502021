const Queue = require("../Queue");

class Graph {
  constructor({ list, matrix, type }) {
    if (matrix) !list && (list = this._generateList(matrix));

    if (!list) throw new Error("Adjency List Required");
    if (!(list instanceof Array))
      throw new Error(`List must be Array, Got ${typeof list}`);
    if (!list.every((vertex) => vertex instanceof Array))
      throw new Error(`Every Vertex must be Array, Got ${typeof list}`);

    this._cost = matrix;
    this._list = list;
    this._size = list.length;
    this._type = type;
  }

  connect(u, v) {
    if (!this._list[u]) this._list[u] = [];
    this._list[u].push(v);

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

  get size() {
    return this._size;
  }

  get list() {
    return this._list;
  }

  isConnected(u, v) {
    return this._list[u].includes(v);
  }

  costOf(u, v) {
    return this._cost[u][v];
  }

  inDegree(u) {
    let count = 0;
    this.forEachVertex((vertex) => graph.isConnected(vertex, u) && count++);
    return count;
  }

  outDegree(u) {
    return this._list[u].length;
  }

  forEachVertex(callback) {
    for (let i = 0; i < this.size; i++) callback(i);
  }

  forEachAdjecent(vertex, callback) {
    this._list[vertex].forEach((adjecent) => callback(adjecent));
  }

  forEachEdge(callback) {
    this.forEachVertex((u) => this.forEachAdjecent(u, (v) => callback(u, v)));
  }

  _generateList(matrix) {
    const size = matrix.length;
    this._list = new Array(size);
    for (let i = 0; i < size; i++) this._list[i] = [];

    for (let i = 0; i < size; i++)
      for (let j = 0; j < size; j++)
        Number.isFinite(matrix[i][j]) && this.connect(i, j);

    return this._list;
  }

  _generateVisitedArray() {
    return new Array(this.size).fill(false);
  }

  _generateDistanceArray() {
    return new Array(this.size).fill(Infinity);
  }
  _generateEmptyList() {
    const list = [];
    this.forEachVertex((vertex) => (list[vertex] = []));
  }

  _transpose() {
    for (let i = 0; i < this.size - 1; i++)
      for (let j = i + 1; j < this.size; j++)
        [this._cost[j][i], this._cost[i][j]] = [
          this._cost[i][j],
          this._cost[j][i],
        ];
  }

  reverse() {
    if (this.type === "undirected") return;

    const list = this._generateEmptyList();
    this._transpose();
    this.forEachEdge((u, v) => {
      list[v].push(u);
    });

    this._list = list;
  }

  display() {
    this._cost.forEach((row) => {
      const output = row.map((val) => (Number.isFinite(val) ? val : 0));
      console.log(output);
    });
  }

  dfs() {
    const visited = this._generateVisitedArray();

    const traverse = (vertex) => {
      visited[vertex] = true;
      this.forEachAdjecent(vertex, (adjecent) => {
        !visited[adjecent] && traverse(adjecent);
      });
    };

    this.forEachVertex((vertex) => {
      !visited[vertex] && traverse(vertex);
    });
  }

  bfs(props) {
    const { before, after } = { before: null, after: null, ...props };
    const visited = this._generateVisitedArray();
    const queue = new Queue();

    queue.enQueue(0);
    visited[0] = true;
    while (!queue.isEmpty) {
      const vertex = queue.deQueue();
      this.forEachAdjecent(vertex, (adjecent) => {
        before && before(vertex, adjecent);

        if (visited[adjecent]) return;
        queue.enQueue(adjecent);
        visited[adjecent] = true;

        after && after(vertex, adjecent);
      });
    }
  }
}

module.exports = Graph;

// const graph = new Graph({
//   matrix: [
//     [Infinity, 2, 3, Infinity, Infinity, Infinity],
//     [2, Infinity, 5, 8, 6, Infinity],
//     [3, 5, Infinity, Infinity, 4, Infinity],
//     [Infinity, 8, Infinity, Infinity, 12, 9],
//     [Infinity, 6, 4, 12, Infinity, 10],
//     [Infinity, Infinity, Infinity, 9, 10, Infinity],
//   ],
//   type: "undirected",
// });

// const graph = new GraphList({ list: [[1], [3], [2], []], type: "directed" });
// console.log(graph.list);
// graph.reverse();
// graph._transpose();
// graph.bfs();
