function high(x) {
  const alpha = "_abcdefghijklmnopqrstuvwxyz";
  let highestWord = { word: "", score: 0 };

  x.split(" ").forEach((word) => {
    let score = 0;
    word
      .toLowerCase()
      .split("")
      .forEach((char) => {
        score += alpha.indexOf(char);
      });
    if (score > highestWord.score) {
      (highestWord.word = word), (highestWord.score = score);
    }
    score = 0;
  });

  return highestWord.word;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
