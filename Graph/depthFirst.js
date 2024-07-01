const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function depthFSIterative(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  // return visited;
}

function depthFSRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighbour of graph[start]) {
      depthFSRecursive(graph, neighbour, visited);
    }
  }
}
