function depthFSIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  let traversalOutput = [];

  while (stack.length > 0) {
    const node = stack.pop();
    traversalOutput.push(node);
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return traversalOutput;
}

function depthFSR(graph, start, visited = new Set(), traversalOrder = []) {
  if (!visited.has(start)) {
    visited.add(start);
    traversalOrder.push(start);
    for (const neighbour of graph[start]) {
      depthFSR(graph, neighbour, visited, traversalOrder);
    }
  }
  return traversalOrder;
}

// Sample graph as adjacency list
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const visitedNodes = depthFSIterative(graph, "a");
const traversalResult = depthFSR(graph, "a");
console.log(visitedNodes);
console.log("recursive: " + traversalResult);
