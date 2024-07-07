function maxPathCost(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;

  //return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  if (
    row >= grid.length ||
    grid[row][col] === "X" || // X or wall or snake
    col >= grid[0].length
  ) {
    return -In;
  }

  //check if you have arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  memo[pos] =
    countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo);

  const rightPaths = countPaths(grid, row + 1, col, memo);
  const downPaths = countPaths(grid, row, col + 1, memo);
  memo[pos] = grid[row][col] + Math.max(rightPaths + downPaths);

  return memo[pos];
}
