function whoIsWinner(piecesPositionList) {
  console.log(piecesPositionList);
  let gameGrid = [
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
  ];

  const winChecker = (grid) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (grid[i][j] === "empty") continue;
        if (j < 3) {
          if (
            grid[i][j] === grid[i][j + 1] &&
            grid[i][j] === grid[i][j + 2] &&
            grid[i][j] === grid[i][j + 3]
          ) {
            return true;
          }
        }
        if (i < 4 && j < 3) {
          if (
            grid[i][j] === grid[i + 1][j + 1] &&
            grid[i][j] === grid[i + 2][j + 2] &&
            grid[i][j] === grid[i + 3][j + 3]
          ) {
            return true;
          }
        }
        if (i > 2 && j > 2) {
          if (
            grid[i][j] === grid[i - 1][j - 1] &&
            grid[i][j] === grid[i - 2][j - 2] &&
            grid[i][j] === grid[i - 3][j - 3]
          ) {
            return true;
          }
        }
        if (i < 4) {
          if (
            grid[i][j] === grid[i + 1][j] &&
            grid[i][j] === grid[i + 2][j] &&
            grid[i][j] === grid[i + 3][j]
          ) {
            return true;
          }
        }
        if (i < 4 && j > 3) {
          if (
            grid[i][j] === grid[i + 1][j - 1] &&
            grid[i][j] === grid[i + 2][j - 2] &&
            grid[i][j] === grid[i + 3][j - 3]
          ) {
            return true;
          }
        }
        if (i > 2 && j < 3) {
          if (
            grid[i][j] === grid[i - 1][j + 1] &&
            grid[i][j] === grid[i - 2][j + 2] &&
            grid[i][j] === grid[i - 3][j + 3]
          ) {
            return true;
          }
        }
        if (i > 2) {
          if (
            grid[i][j] === grid[i - 1][j] &&
            grid[i][j] === grid[i - 2][j] &&
            grid[i][j] === grid[i - 3][j]
          ) {
            return true;
          }
        }
        if (j > 2) {
          if (
            grid[i][j] === grid[i][j - 1] &&
            grid[i][j] === grid[i][j - 2] &&
            grid[i][j] === grid[i][j - 3]
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  let hasWinner = false;
  let winner = "";

  piecesPositionList.forEach((position) => {
    const positionInfo = position.split("_");

    let column = 0;
    switch (positionInfo[0]) {
      case "A":
        column = 0;
        break;
      case "B":
        column = 1;
        break;
      case "C":
        column = 2;
        break;
      case "D":
        column = 3;
        break;
      case "E":
        column = 4;
        break;
      case "F":
        column = 5;
        break;
      case "G":
        column = 6;
        break;
    }

    if (!hasWinner) {
      for (let i = 0; i < 6; i++) {
        if (gameGrid[column][i] === "empty") {
          gameGrid[column][i] = positionInfo[1];
          if (winChecker(gameGrid)) {
            hasWinner = true;
            winner = positionInfo[1];
          }
          break;
        }
        if (hasWinner === true) break;
      }
    }
  });

  if (hasWinner === true) return winner;

  return "Draw";
}

// console.log(
//   whoIsWinner([
//     "C_Yellow",
//     "E_Red",
//     "G_Yellow",
//     "B_Red",
//     "D_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "G_Red",
//     "C_Yellow",
//     "C_Red",
//     "D_Yellow",
//     "F_Red",
//     "E_Yellow",
//     "A_Red",
//     "A_Yellow",
//     "G_Red",
//     "A_Yellow",
//     "F_Red",
//     "F_Yellow",
//     "D_Red",
//     "B_Yellow",
//     "E_Red",
//     "D_Yellow",
//     "A_Red",
//     "G_Yellow",
//     "D_Red",
//     "D_Yellow",
//     "C_Red",
//   ])
// );

console.log(
  whoIsWinner([
    "F_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow",
    "E_Red",
    "D_Yellow",
    "D_Red",
    "E_Yellow",
    "G_Red",
    "G_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "B_Yellow",
    "F_Red",
    "A_Yellow",
    "E_Red",
    "G_Yellow",
    "F_Red",
    "G_Yellow",
    "C_Red",
    "B_Yellow",
    "E_Red",
  ])
);

// console.log(
//   whoIsWinner([
//     "C_Red",
//     "F_Yellow",
//     "G_Red",
//     "D_Yellow",
//     "G_Red",
//     "A_Yellow",
//     "D_Red",
//     "A_Yellow",
//     "F_Red",
//     "D_Yellow",
//     "G_Red",
//     "E_Yellow",
//     "E_Red",
//     "E_Yellow",
//     "D_Red",
//     "D_Yellow",
//     "C_Red",
//     "B_Yellow",
//     "E_Red",
//     "F_Yellow",
//     "A_Red",
//     "F_Yellow",
//     "D_Red",
//   ])
// );

// CONNECT FOUR
// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.
