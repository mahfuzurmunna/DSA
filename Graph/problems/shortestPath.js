function toDirectedGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

//using BFS to find shortest path in graph
function shortestPath(edges, start, dest) {
  const graph = toDirectedGraph(edges);
  const queue = [[start, 0]];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === dest) return distance;

    //process the child
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
}

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(shortestPath(edges, "q", "b"));
