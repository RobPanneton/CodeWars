function alphabetPosition(text) {
  const alphabet = "_abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  let charArray = text
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z]/.test(char) === true);

  charArray.forEach((char, index) => {
    index < charArray.length - 1
      ? (newString += `${alphabet.indexOf(char)} `)
      : (newString += `${alphabet.indexOf(char)}`);
  });

  return newString;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));

//   Welcome.

// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
