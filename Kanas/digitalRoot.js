function digital_root(n) {
  let digitalRoot = n;

  while (digitalRoot > 9)
    digitalRoot = [...digitalRoot.toString()].reduce(
      (a, b) => Number(a) + Number(b),
      0
    );

  return digitalRoot;
}

console.log(digital_root(123));
console.log(digital_root(1));
console.log(digital_root(16));
console.log(digital_root(456));

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
