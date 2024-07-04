const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: [],
  e: ["d"],
  f: ["e"],
};

function countIsland(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          dfs(neighbour);
        }
      }
    }
  }
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}

const count = countIsland(graph);

console.log(count);
