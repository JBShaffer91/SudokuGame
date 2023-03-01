import { grid, solution, generatePuzzle } from './sudoku-rules.js';
import '../css/styles.css';

const newGameButton = document.querySelector("#new-game");
const checkButton = document.querySelector("#check");

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

function resetPuzzle() {
  generatePuzzle();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = grid[i][j];
      cell.value = '';
      cell.classList.remove('correct', 'incorrect');
      if (!cell.classList.contains('static')) {
        cell.removeAttribute('readonly');
      }
    }
  }
}

window.onload = function() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    checkSolution();
  });

  newGameButton.addEventListener("click", function() {
    resetPuzzle();
  });
};
