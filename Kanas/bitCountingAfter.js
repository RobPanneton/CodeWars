// Soltion after discovering Number.toString(2) returns binary conversion

var countBits = function (n) {
  return n.toString(2).split("0").join("").length;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(10));
console.log(countBits(254));
console.log(countBits(200));
console.log(countBits(77231418));

// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
