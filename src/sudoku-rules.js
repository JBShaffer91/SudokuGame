function checkRow(row) {
  const set = new Set(row);
  return set.size === row.length && !set.has(0);
}

module.exports = { checkRow };

function checkColumn(grid, columnIndex) {
  const column = [];
  for (let i = 0; i < grid.length; i++) {
    column.push(grid[i][columnIndex]);
  }
  const set = new Set(column);
  return set.size === column.length && !set.has(0);
}

module.exports = { checkRow, checkColumn };
