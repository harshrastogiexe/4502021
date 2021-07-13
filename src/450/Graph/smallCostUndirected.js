const Graph = require("../../Graph/graph");
const Queue = require("../../Queue");

function smallestCostFromSource(graph = new Graph(), source = 0) {
  const distance = new Array(graph.size).fill(Infinity);
  const visited = graph._generateVisitedArray();

  visited[source] = true;
  distance[source] = 0;

  const queue = new Queue();
  queue.enQueue(0);

  while (!queue.isEmpty) {
    const vertex = queue.deQueue();

    graph.getAdjecent(vertex).forEach((adjecentVertex) => {
      distance[adjecentVertex] = Math.min(
        distance[vertex] + 1,
        distance[adjecentVertex]
      );

      if (visited[adjecentVertex]) return;
      queue.enQueue(adjecentVertex);
      visited[adjecentVertex] = true;
    });
  }
  console.log(distance);
  return distance;
}

const graph = new Graph([[1, 2, 6], [3, 4], [5], [6], [6], [4, 7], [7], []]);
// console.log(graph.bfs(console.log));
smallestCostFromSource(graph);
