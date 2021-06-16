export function repeater(str: string, n: number): string {
  let repeatedStr: string = "";

  for (let i = 0; i < n; i++) repeatedStr += str;

  return repeatedStr;
}

//   Write a function named repeater() that takes two arguments (a string and a number),
//   and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"
