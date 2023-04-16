function isPangram(string) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  string
    .toLowerCase()
    .split("")
    .forEach((l) => {
      console.log(l);
      console.log(alph.includes(l));
      if (alph.includes(l)) alph = alph.replace(l, "");
    });
  return alph.length === 0 ? true : false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
