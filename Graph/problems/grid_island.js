function islandCount(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let count = 0;

  //recursive function
  function dfs(r, c) {
    const pos = r + "," + c;

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === 0 ||
      visited.has(pos)
    ) {
      return;
    }

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  //using loops in rows and cols
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !visited.has(r + "," + c)) {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

const grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];
islandCount(grid);
