function breadthFS(graph, start) {
  const queue = [start];
  const visited = new Set();
  const traversalOutput = [];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    traversalOutput.push(node);
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return traversalOutput;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const bfsTraversalOutput = breadthFS(graph, "a");
console.log(bfsTraversalOutput);
