function findOdd(A) {
  let count = {};

  A.forEach((num) => {
    count[num] ? count[num]++ : (count[num] = 1);
  });

  let answer = 0;
  Object.keys(count).forEach((num) => {
    if (count[num] % 2 !== 0) answer = num;
  });
  return Number(answer);
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
