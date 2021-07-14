const ListGraph = require("../../Graph/graph");
const Queue = require("../../Queue");

function primsAlgorithm(graph = new ListGraph(), weight) {
  const visited = graph._generateVisitedArray();
  const queue = new Queue();
  visited[0] = true;
}

// function primsAlgorithm(graph = new ListGraph(), weight) {
//   const visited = graph._generateVisitedArray();
//   const queue = new Queue();
//   queue.enQueue(0);
//   visited[0] = true
//   let result = 0;
//   while (!queue.isEmpty) {
//     const vertex = queue.deQueue();
//     // find minimum edge connected to `vertex`

//     const min = { weight: -1, vertex: null };
//     graph.getAdjecent(vertex).forEach((adjecent) => {
//       console.log(
//         `Edge: [${vertex}, ${adjecent}], Weight: ${weight[vertex][adjecent]} `
//       );
//       // selecting edge which is not selected

//       if (!visited[adjecent] && min.weight === -1) {
//         min.weight = weight[vertex][adjecent];
//         min.vertex = adjecent;
//         return;
//       }

//       if (!visited[adjecent] && weight[vertex][adjecent] < min.weight) {
//         min.weight = weight[vertex][adjecent];
//         min.vertex = adjecent;
//       }
//     });
//     // console.log(selectedVertex);
//     console.log(min);
//     result += min.weight;
//   }
// }

const weight = [
  [Infinity, 5, 8, Infinity],
  [5, Infinity, 10, 15],
  [8, 10, Infinity, 20],
  [0, Infinity, Infinity, 0],
];
const graph = new ListGraph([
  [1, 2],
  [0, 2, 3],
  [0, 1, 3],
  [1, 2],
]);
primsAlgorithm(graph, weight);
