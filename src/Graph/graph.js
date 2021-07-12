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

  add(vertex = []) {
    this.list.push(vertex);
  }

  remove(u) {
    // for (let i = u + 1; i < this.list.length; i++) {
    //   this.list[i - 1] = this.list[i];
    // }
    // this.list.pop();
    this.list[2] = [];

    this.list.forEach((row) => {
      const pos = row.indexOf(u);
      if (pos === -1) return;

      for (let i = pos + 1; i < row.length; i++) row[i - 1] = row[i];
      row.pop();
    });
  }
}

const adjecentMatrix = [
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 0, 1, 0],
];

const graph = new MatrixGraph(adjecentMatrix);
const listGraph = new ListGraph(graph.convert());
listGraph.remove(2);
console.log(listGraph);
