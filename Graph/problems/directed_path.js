function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }

  return false;
}

function hasPathBFS(graph, start, dest) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dest) return true;

    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        queue.push(neighbour);
      }
    }
  }
  return false;
}

const hasPathRecursive = (graph, start, dest) => {
  if (start === dest) return true;

  for (const neighbour of graph[start]) {
    if (hasPathRecursive(graph, neighbour, dest) === true) {
      return true;
    }
  }

  return false;
};
