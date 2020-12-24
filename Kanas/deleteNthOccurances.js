function deleteNth(arr, n) {
  let newArr = [];
  let checker = {};

  arr.forEach((num) => {
    if (checker[num] && checker[num] < n) {
      checker[num]++;
      newArr.push(num);
    } else if (!checker[num]) {
      checker[num] = 1;
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(deleteNth([20, 37, 20, 21], 1));
