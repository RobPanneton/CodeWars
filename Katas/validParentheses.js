function validParentheses(parens) {
  if (parens.length === 0) return true;
  let p = parens;
  let leftCount = 0;
  let rightCount = 0;
  let removed = 0;

  parens.split("").forEach((bracket) => {
    bracket === "(" ? leftCount++ : rightCount++;
  });

  if (
    rightCount !== leftCount ||
    parens.charAt(0) !== "(" ||
    parens.charAt(parens.length - 1) !== ")"
  )
    return false;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ")") {
      let checker = false;
      for (let j = 0; j < i - removed; j++) {
        if (p[j] === "(") checker = true;
      }
      if (checker === false) return false;

      let index = p.indexOf("(");
      p = p.split("");
      p.splice(index, 1);
      p = p.join("");

      index = p.indexOf(")");
      p = p.split("");
      p.splice(index, 1);
      p = p.join("");

      removed = removed + 2;
    }
  }

  return true;
}

// not very elegant

console.log(validParentheses("()"));
console.log(validParentheses("())"));
console.log(validParentheses("())(()")); // expects false

// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// very elegant
// let count = 0;
// loop around parens, n++ for ( , n-- for ) . n < 0 ? return false.
// return n==0,  done
