const { ListGraph } = require("../../Graph/graph");

function dfs(vertex, visited, graph = new ListGraph(), stack) {
  const traverse = (vertex) => {
    visited[vertex] = true;
    stack && typeof stack === "function" && stack(vertex);
    graph.getAdjecent(vertex).forEach((adjecent) => {
      !visited[adjecent] && traverse(adjecent);
    });
    stack && stack instanceof Array && stack.push(vertex);
  };
  traverse(vertex);
}

function getVerticesInFinishTime(graph = new ListGraph()) {
  const stack = [];
  const visited = graph._generateVisitedArray();

  for (let i = 0; i < graph.size; i++)
    !visited[i] && dfs(i, visited, graph, stack);
  return stack;
}
function kushrajoAlgorithm(graph = new ListGraph()) {
  const visited = graph._generateVisitedArray();
  const stack = getVerticesInFinishTime(graph);

  graph = reverseGraph(graph);

  visited.fill(false);
  while (stack.length) {
    const vertex = stack.pop();
    if (!visited[vertex]) {
      const result = [];
      dfs(vertex, visited, graph, (val) => result.push(val));
      console.log(result);
    }
  }
}

function reverseGraph(graph = new ListGraph()) {
  const edges = [];
  for (let i = 0; i < graph.size; i++) edges.push([]);

  graph.list.forEach((_, parent) =>
    graph.getAdjecent(parent).forEach((child) => edges[child].push(parent))
  );

  return new ListGraph(edges);
}
const graph = new ListGraph([[], [], [], [], [], []]);
graph.connect(0, 1);
graph.connect(1, 2);
graph.connect(2, 3);
graph.connect(3, 0);
graph.connect(3, 4);
graph.connect(4, 5); 
graph.connect(5, 4);
kushrajoAlgorithm(graph);
