const { checkRow } = require('../src/sudoku-rules');
const { checkColumn } = require('../src/sudoku-rules');

describe('checkRow', () => {
  it('should return true if the row is valid', () => {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(checkRow(row)).toBe(true);
  });

  it('should return false if the row is invalid', () => {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 8];
    expect(checkRow(row)).toBe(false);
  });
});

describe('checkColumn', () => {
  it('should return true if the column is valid', () => {
    const board = [      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    const columnIndex = 0;
    expect(checkColumn(board, columnIndex)).toBe(true);
  });

  it('should return false if the column is invalid', () => {
    const board = [      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [1, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    const columnIndex = 0;
    expect(checkColumn(board, columnIndex)).toBe(false);
  });
});
