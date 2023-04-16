function transpose(matrix) {
  let newArr = [];
  matrix.forEach((array, index) => {
    array.forEach((num, index2) => {
      index === 0 ? newArr.push([num]) : newArr[index2].push(num);
    });
  });
  return newArr;
}

console.log(transpose([[1]]));
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

// Write a function that outputs the transpose of a matrix -
// a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length,
// and that the height and width of the matrix are both positive.
