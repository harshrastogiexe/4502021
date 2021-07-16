const Queue = require("../../Queue");
const { ListGraph } = require("../../Graph/graph");
const Graph = require("../../Graph/GraphV2");

const cost = [
  [Infinity, 2, Infinity, Infinity, 1, Infinity],
  [Infinity, Infinity, 3, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, 6, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, 2, Infinity, Infinity, 4],
  [Infinity, Infinity, Infinity, 1, Infinity, Infinity],
];

function sortestDistanceToEveryVertex(graph = new Graph()) {
  const distances = graph._generateDistanceArray();
  distances[0] = 0;

  graph.bfs({
    before: (u, v) => {
      if (distances[u] + graph.costOf(u, v) < distances[v])
        distances[v] = distances[u] + graph.costOf(u, v);
    },
  });
  return distances;
}

const list = [[1, 4], [2], [3], [], [2, 5], [3]];

const listGraph = new ListGraph(list);
const graph = new Graph({
  matrix: cost,
  list: list,
});

// console.log(graph);
let start, end;
start = performance.now();
for (let i = 0; i < 400; i++) sortestDistanceToVertex(listGraph, cost);
end = performance.now();
console.log("Old:", (end - start) * 2.5);

start = performance.now();
end = performance.now();
console.log("New:", (end - start) * 2.5);
for (let i = 0; i < 400; i++) sortestDistanceToEveryVertex(graph);
