const Graph = require("../../Graph/GraphV2");

function bellmannfordAlgorithm(graph = new Graph()) {
  const distance = graph._generateDistanceArray();
  distance[0] = 0;

  for (let count = 0; count < graph.size - 1; count++)
    graph.forEachEdge((u, v) => {
      if (distance[u] + graph.costOf(u, v) < distance[v])
        distance[v] = distance[u] + graph.costOf(u, v);
    });

  return distance;
}

const weight = [
  [Infinity, 1, 4, Infinity],
  [Infinity, Infinity, -3, 2],
  [Infinity, Infinity, Infinity, 3],
  [Infinity, Infinity, Infinity, Infinity],
];

const graph = new Graph({ matrix: weight });
