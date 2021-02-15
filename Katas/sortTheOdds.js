function sortArray(array) {
  if (array.length === 0) return array;
  let sortedArray = [];
  let oddArray = [];
  sortedArray.length = array.length;

  array.forEach((num, index) => {
    array[index] % 2 === 0 ? (sortedArray[index] = num) : oddArray.push(num);
  });

  oddArray.sort((a, b) => a - b);

  oddArray.forEach((odd) => {
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === undefined) {
        sortedArray[i] = odd;
        break;
      }
    }
  });

  return sortedArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));

// Task
// You will be given an array of numbers. You have to sort the odd numbers in
// ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
