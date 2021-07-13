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

// const graph = new Graph([[1, 2], [3, 4], [5], [6], [6], [4, 7], [7], []]);
const graph2 = new Graph([[1], [0, 2, 3], [1, 3, 4], [1, 2], [2, 5], [4]]);
// const graph2 = new Graph([[1], [2], [1]]);
// console.log(graph2.bfs(console.log));
// graph2.dfs(console.log);
// smallestCostFromSource(graph, 5);
// smallestCostFromSource(graph2);

console.log(graph2.isCyclic);
