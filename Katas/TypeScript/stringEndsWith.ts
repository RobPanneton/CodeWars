function solution(str: string, ending: string): boolean {
  for (let i = 0; i < ending.length; i++)
    if (
      str.charAt(str.length - (1 + i)) !==
      ending.charAt(ending.length - (1 + i))
    )
      return false;

  return true;
}

console.log(solution("abc", "c"));
console.log(solution("abc", "bc"));
console.log(solution("abc", "dc"));
console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("abc", ""));

// Complete the solution so that it returns true if the first
// argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
