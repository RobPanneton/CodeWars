function validSolution(board) {
  let checkArr = [];

  // check for 0s and horizontal matches
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
      if (checkArr.some((v) => v === board[i][j])) return false;
      checkArr.push(board[i][j]);
    }
    checkArr = [];
  }

  // check for vertical matches
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (checkArr.some((v) => v === board[j][i])) return false;
      checkArr.push(board[j][i]);
    }
    checkArr = [];
  }

  // check the "boxes"

  const winChecker = (initialI, initialJ) => {
    let checkArr1 = [];
    for (let i = initialI; i < initialI + 3; i++) {
      for (let j = initialJ; j < initialJ + 3; j++) {
        if (checkArr1.some((v) => v === board[j][i])) return false;
        checkArr1.push(board[j][i]);
      }
    }
    return true;
  };

  if (!winChecker(0, 0)) return false;
  if (!winChecker(0, 3)) return false;
  if (!winChecker(0, 6)) return false;
  if (!winChecker(3, 0)) return false;
  if (!winChecker(3, 3)) return false;
  if (!winChecker(3, 6)) return false;
  if (!winChecker(6, 0)) return false;
  if (!winChecker(6, 3)) return false;
  if (!winChecker(6, 6)) return false;

  return true;
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ])
);

console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
);
// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with
// digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks)
//  contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution()
// that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution,
//  or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells.
//  Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false
