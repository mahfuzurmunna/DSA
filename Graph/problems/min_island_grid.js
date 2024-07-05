/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

*/

function minIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let smallestSize = Infinity;

  function exploreSize(r, c) {
    const pos = r + "," + c;

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    visited.add(pos);
    let size = 1;
    size += exploreSize(r + 1, c); // Explore down
    size += exploreSize(r - 1, c); // Explore up
    size += exploreSize(r, c + 1); // Explore right
    size += exploreSize(r, c - 1); // Explore left

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        const islandSize = exploreSize(r, c);
        if (islandSize < smallestSize) {
          smallestSize = islandSize;
        }
      }
    }
  }

  return smallestSize;
}

const grid = [
  ["W", "L", "W", "W", "L"],
  ["L", "L", "W", "L", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(minIslandSize(grid)); // Output should be the size of the smallest island
