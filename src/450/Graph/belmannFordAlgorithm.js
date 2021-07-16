const { ListGraph } = require("../../Graph/graph");

function bellmannfordAlgorithm(graph = new ListGraph(), cost) {
  const distance = new Array(graph.size).fill(Infinity);
  distance[0] = 0;

  for (let count = 0; count < graph.size - 1; count++) {
    graph.forEachEdge((u, v) => {
      if (distance[u] + cost[u][v] < distance[v]) {
        distance[v] = distance[u] + cost[u][v];
      }
    });
  }
  return distance;
}

const weight = [
  [Infinity, 1, 4, Infinity],
  [Infinity, Infinity, -3, 2],
  [Infinity, Infinity, Infinity, 3],
  [Infinity, Infinity, Infinity, Infinity],
];

const graph = new ListGraph([[1, 2], [2, 3], [3], []]);
bellmannfordAlgorithm(graph, weight);
