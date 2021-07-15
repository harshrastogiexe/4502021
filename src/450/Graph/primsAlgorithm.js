const Graph = require("../../Graph/graph");

function calcCost(graph = new Graph()) {
  const parent = primsAlgorithm(graph);
  let result = 0;
  for (let i = 1; i < graph.size; i++) {
    result += graph.matrix[i][parent[i]];
  }
  return result;
}

function printMST(graph = new Graph()) {
  const parent = primsAlgorithm(graph);
  for (let i = 1; i < graph.size; i++) {
    console.log(i, " -> ", parent[i], " Weight: ", graph.matrix[parent[i]][i]);
  }
}

function selectMinVertex(distance = [], MST = new Set()) {
  let minimum = Infinity;
  let selectedVertex;
  for (let vertex = 0; vertex < distance.length; vertex++)
    if (!MST.has(vertex) && distance[vertex] < minimum) {
      selectedVertex = vertex;
      minimum = distance[vertex];
    }
  return selectedVertex;
}

function primsAlgorithm(graph = new Graph(), source = 0) {
  const parent = new Array(graph.size).fill(-1);
  const distance = new Array(graph.size).fill(Infinity);
  const MST = new Set();

  distance[source] = 0;

  for (let i = 0; i < graph.size - 1; i++) {
    const vertex = selectMinVertex(distance, MST);
    MST.add(vertex);
    graph.getAdjecent(vertex).forEach((adjecent) => {
      if (
        !MST.has(adjecent) &&
        graph.matrix[vertex][adjecent] < distance[adjecent]
      ) {
        distance[adjecent] = graph.matrix[vertex][adjecent];
        parent[adjecent] = vertex;
      }
    });
  }
  return parent;
}

const weight = [
  [0, 4, 6, 0, 0, 0],
  [4, 0, 6, 3, 4, 0],
  [6, 6, 0, 1, 0, 0],
  [0, 3, 1, 0, 2, 3],
  [0, 4, 0, 2, 0, 7],
  [0, 0, 0, 3, 7, 0],
];
const graph = new Graph(weight);
const connectedEdges = primsAlgorithm(graph);
console.log(connectedEdges);
console.log("Min Cost", calcCost(graph));
printMST(graph);
 