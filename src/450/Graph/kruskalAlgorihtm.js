const Graph = require("../../Graph/GraphV2");

function kruskulAlgorithm(graph = new Graph()) {
  console.log(graph.list);
  // sort edges
}

kruskulAlgorithm(
  new Graph({
    matrix: [
      [Infinity, 6, 5, Infinity, Infinity],
      [6, Infinity, 3, 8, Infinity],
      [5, 4, Infinity, 7, 12],
      [Infinity, 8, 7, Infinity, 10],
      [Infinity, Infinity, 12, 10, Infinity],
    ],
  })
);
