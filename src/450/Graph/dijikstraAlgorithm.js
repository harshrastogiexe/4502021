const MatrixGraph = require("../../Graph/graph");

const matrix = [
  [Infinity, 4, 6, Infinity, Infinity, Infinity],
  [4, Infinity, 6, 3, 4, Infinity],
  [6, 6, Infinity, 1, Infinity, Infinity],
  [Infinity, 3, 1, Infinity, 2, 7],
  [Infinity, 4, Infinity, 2, Infinity, 3],
  [Infinity, Infinity, Infinity, 7, 3, Infinity],
];

function selectMinVertex(distance = [], selected = new Set()) {
  let min = Infinity;
  let smallestVertex;
  for (let vertex = 0; vertex < distance.length; vertex++) {
    if (!selected.has(vertex) && distance[vertex] < min) {
      min = distance[vertex];
      smallestVertex = vertex;
    }
  }
  return smallestVertex;
}

function digiKstraAlgorithm(graph = new MatrixGraph(), source = 0) {
  const distance = new Array(graph.size).fill(Infinity);
  const selectedSet = new Set();

  distance[source] = 0;

  for (let count = 0; count < graph.size; count++) {
    const vertex = selectMinVertex(distance, selectedSet);
    selectedSet.add(vertex);

    graph.getAdjecent(vertex).forEach((adjecent) => {
      if (
        !selectedSet.has(adjecent) &&
        distance[vertex] + graph.matrix[vertex][adjecent] < distance[adjecent]
      ) {
        distance[adjecent] = distance[vertex] + graph.matrix[vertex][adjecent];
      }
    });
    console.log(vertex, distance);
  }
}

const graph = new MatrixGraph(matrix);
digiKstraAlgorithm(graph);
