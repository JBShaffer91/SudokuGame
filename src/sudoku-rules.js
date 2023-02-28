function checkRow(row) {
  const set = new Set(row);
  return set.size === row.length && !set.has(0);
}

function checkColumn(grid, columnIndex) {
  const column = [];
  for (let i = 0; i < grid.length; i++) {
    column.push(grid[i][columnIndex]);
  }
  const set = new Set(column);
  return set.size === column.length && !set.has(0);
}

function checkSubgrid(grid, row, col, num) {
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;
  const subgridValues = new Set();

  for (let i = subgridRowStart; i < subgridRowStart + 3; i++) {
    for (let j = subgridColStart; j < subgridColStart + 3; j++) {
      const value = grid[i][j];
      if (subgridValues.has(value)) {
        return false;
      }
      subgridValues.add(value);
    }
  }

  return true;
}


module.exports = { checkRow, checkColumn, checkSubgrid };
