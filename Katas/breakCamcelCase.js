function solution(string) {
  const capRegEx = /^[A-Z]/;
  let newString = [];
  let splits = 0;
  string.split("").forEach((char, index) => {
    newString.push(char);
    if (capRegEx.test(char)) {
      newString.splice(index + splits, 0, " ");
      splits++;
    }
  });
  return newString.join("");
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
console.log(solution("camelCasingTestAgain"));
