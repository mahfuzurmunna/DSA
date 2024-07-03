/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.



*/

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

function hasPathRec(graph, start, dest, visited = new Set()) {
  if (start === dest) return true;

  //just 4 lines for visited
  if (visited.has(start)) {
    return false;
  }
  visited.add(start);

  //rest all is good

  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest) === true) {
      return true;
    }
  }
  return false;
}
