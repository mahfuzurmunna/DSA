function countPaths(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;
  //return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "X" // X or wall or snake
  ) {
    return 0;
  }
  //check if you arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  const rightPath = countPaths(grid, row + 1, col, memo);
  const downPath = countPaths(grid, row, col + 1, memo);

  memo[pos] = rightPath + downPath;

  return memo[pos];
}
