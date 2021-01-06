var countBits = function (n) {
  console.log(n.toString(2));
  if (n <= 0) return 0;
  let ones = 0;
  let firstPos = 0;
  let number = n;

  for (let i = 0; number >= 1; i++) {
    number /= 2;
    firstPos++;
  }

  number = n;

  for (let i = firstPos; number > 0; i--) {
    if (number >= Math.pow(2, i)) {
      number -= Math.pow(2, i);
      ones++;
    }
  }

  return ones;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(10));
console.log(countBits(254));
console.log(countBits(200));
console.log(countBits(77231418));

// 128 64 32 16 8421
// 0   0  0  0 0000

// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
