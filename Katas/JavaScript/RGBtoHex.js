function rgb(r, g, b) {
  const values = "0123456789ABCDEF";

  function getHex(num) {
    return num <= 0
      ? `00`
      : num > 255
      ? `FF`
      : `${values.charAt(Math.floor(num / 16))}${values.charAt(num % 16)}`;
  }

  return `${getHex(r)}${getHex(g)}${getHex(b)}`;
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(Number("255").toString(16));

// The rgb function is incomplete. Complete it so that passing in RGB decimal
// values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
