/*
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
const graph = {
  b: [a],
  a: [b]
}
loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/
const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];
function undirectedGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === dest) return true;

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
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
  }

  return false;
}

function hasPathRec(graph, start, dest, visited = new Set()) {
  if (start === dest) return true;

  if (visited.has(start)) return false;

  visited.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest, visited) === true) return true;
  }

  return false;
}

function undirectedEdgedToGraphAndCheckDirectedPath(edges, start, dest) {
  const graph = undirectedGraph(edges);
  return directedPathDFS(graph, start, dest);
}

const result = undirectedEdgedToGraphAndCheckDirectedPath(edges, "r", "q");
console.log(result);
