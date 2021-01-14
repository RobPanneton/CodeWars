function toCamelCase(str) {
  return str.includes("_")
    ? str
        .split("_")
        .map((w, i) =>
          i === 0
            ? str.charCodeAt(str.charAt(0)) < 96
              ? w.charAt(0).toUpperCase() + w.slice(1)
              : w.charAt(0).toLowerCase() + w.slice(1)
            : w.charAt(0).toUpperCase() + w.slice(1)
        )
        .join("")
    : str
        .split("-")
        .map((w, i) =>
          i === 0
            ? str.charCodeAt(str.charAt(0)) < 96
              ? w.charAt(0).toUpperCase() + w.slice(1)
              : w.charAt(0).toLowerCase() + w.slice(1)
            : w.charAt(0).toUpperCase() + w.slice(1)
        )
        .join("");
}

console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("the_stealth_warrior"));

// Complete the method/function so
// that it converts dash/underscore
// delimited words into camel casing.
// The first word within the output should be capitalized
//  only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
