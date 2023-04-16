var moveZeros = function (arr) {
  let zeros = 0;
  let newArr = [];
  arr.forEach((ele) => {
    ele === 0 ? zeros++ : newArr.push(ele);
  });
  for (let i = 0; i < zeros; i++) newArr.push(0);

  return newArr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

//   Write an algorithm that takes an array and moves all of the zeros to the end,
//   preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
