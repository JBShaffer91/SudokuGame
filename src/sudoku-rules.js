import { grid, solution, generatePuzzle } from './sudoku-rules.js';

class SudokuPuzzle {
  constructor(board) {
    this.board = board;
  }

  checkRow(row) {
    const set = new Set(row);
    return set.size === row.length && !set.has(0);
  }

  checkColumn(columnIndex) {
    const column = [];
    for (let i = 0; i < this.board.length; i++) {
      column.push(this.board[i][columnIndex]);
    }
    const set = new Set(column);
    return set.size === column.length && !set.has(0);
  }

  checkSubgrid(row, col, num) {
    const subgridRowStart = Math.floor(row / 3) * 3;
    const subgridColStart = Math.floor(col / 3) * 3;
    const subgridValues = new Set();

    for (let i = subgridRowStart; i < subgridRowStart + 3; i++) {
      for (let j = subgridColStart; j < subgridColStart + 3; j++) {
        const value = this.board[i][j];
        if (subgridValues.has(value)) {
          return false;
        }
        subgridValues.add(value);
      }
    }

    return true;
  }

  checkBoard() {
    // Check each row
    for (let row = 0; row < 9; row++) {
      if (!this.checkRow(this.board[row])) {
        return false;
      }
    }

    // Check each column
    for (let col = 0; col < 9; col++) {
      if (!this.checkColumn(col)) {
        return false;
      }
    }

    // Check each subgrid
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        if (!this.checkSubgrid(row, col)) {
          return false;
        }
      }
    }

    // If all checks pass, the board is valid
    return true;
  }
}

function checkSolution() {
  let isCorrect = true;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = grid[i][j];
      const userInput = parseInt(cell.value);
      const correctValue = solution[i][j];
      if (userInput !== correctValue) {
        isCorrect = false;
        cell.classList.add('incorrect');
      } else {
        cell.classList.remove('incorrect');
        cell.classList.add('correct');
      }
    }
  }
  if (isCorrect) {
    alert('Congratulations! You solved the puzzle!');
  } else {
    alert('Sorry, your solution is incorrect. Please try again.');
  }
}

window.onload = function() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    checkSolution();
  });
};
