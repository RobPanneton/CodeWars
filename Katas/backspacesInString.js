function cleanString(s) {
  let newString = [];

  s.split("").forEach((char) => {
    char === "#" ? newString.pop() : newString.push(char);
  });

  return newString.join("");
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
