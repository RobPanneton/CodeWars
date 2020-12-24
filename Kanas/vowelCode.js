function encode(string) {
  const stringArray = string.split("");
  const encodedArray = [];

  stringArray.forEach((char) => {
    switch (char) {
      case "a":
        encodedArray.push("1");
        break;
      case "e":
        encodedArray.push("2");
        break;
      case "i":
        encodedArray.push("3");
        break;
      case "o":
        encodedArray.push("4");
        break;
      case "u":
        encodedArray.push("5");
        break;
      default:
        encodedArray.push(char);
        break;
    }
  });

  const encodedString = encodedArray.join("");

  return encodedString;
}

function decode(string) {
  const stringArray = string.split("");
  let decodedArray = [];

  stringArray.forEach((char) => {
    switch (char) {
      case "1":
        decodedArray.push("a");
        break;
      case "2":
        decodedArray.push("e");
        break;
      case "3":
        decodedArray.push("i");
        break;
      case "4":
        decodedArray.push("o");
        break;
      case "5":
        decodedArray.push("u");
        break;
      default:
        decodedArray.push(char);
        break;
    }
  });

  const decodedString = decodedArray.join("");

  return decodedString;
}

console.log(encode("hello"));
console.log(decode("h2ll4"));

// Step 1: Create a function called encode() to replace all the lowercase vowels
// in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
