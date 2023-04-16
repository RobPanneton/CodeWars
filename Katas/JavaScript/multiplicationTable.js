multiplicationTable = function (size) {
  newArr = [];

  for (let i = 0; i < size; i++) {
    let iArr = [];
    for (let j = 0; j < size; j++) {
      iArr.push((j + 1) * (i + 1));
    }
    newArr.push(iArr);
  }

  return newArr;
};

console.log(multiplicationTable(3));
console.log(multiplicationTable(1));
console.log(multiplicationTable(4));

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
