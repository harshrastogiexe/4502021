const Queue = require("../../Queue");
const ListGraph = require("../../Graph/graph");

const cost = [
  [Infinity, 2, Infinity, Infinity, 1, Infinity],
  [Infinity, Infinity, 3, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, 6, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, 2, Infinity, Infinity, 4],
  [Infinity, Infinity, Infinity, 1, Infinity, Infinity],
];

function sortestDistanceToVertex(graph = new ListGraph(), cost, source = 0) {
  const visited = graph._generateVisitedArray();
  const distance = new Array(graph.size).fill(Infinity);
  const queue = new Queue();

  queue.enQueue(source);
  visited[source] = true;
  distance[source] = 0;

  while (!queue.isEmpty) {
    const vertex = queue.deQueue();

    graph.getAdjecent(vertex).forEach((adjecent) => {
      distance[adjecent] = Math.min(
        cost[vertex][adjecent] + distance[vertex],
        distance[adjecent]
      );

      if (visited[adjecent]) return;
      queue.enQueue(adjecent);
      visited[adjecent] = true;
    });
  }
  return distance;
}

function sortestDistanceTopological(graph = new ListGraph(), cost, source = 0) {
  const vertices = ListGraph.topologicalSortingBFS(graph);
  const distance = new Array(graph.size).fill(Infinity);
  distance[source] = 0;

  vertices.forEach((vertex) => {
    graph.getAdjecent(vertex).forEach((adjecent) => {
      distance[adjecent] = Math.min(
        cost[vertex][adjecent] + distance[vertex],
        distance[adjecent]
      );
    });
  });
  return distance;
}
const graph = new ListGraph([[1, 4], [2], [3], [], [2, 5], [3]]);
