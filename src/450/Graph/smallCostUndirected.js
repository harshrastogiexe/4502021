const Graph = require("../../Graph/graph");
const Queue = require("../../Queue");

function smallestCostFromSource(graph = new Graph(), source = 0, to = -1) {
  const distance = new Array(graph.size).fill(Infinity);
  const visited = graph._generateVisitedArray();

  visited[source] = true;
  distance[source] = 0;

  const queue = new Queue();
  queue.enQueue(source);

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
  console.log(to < 0 ? distance : distance[to]);
  return to < 0 ? distance : distance[to];
}
