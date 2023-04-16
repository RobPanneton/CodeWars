function inArray(array1, array2) {
  //   let matches = [];

  //   array1.forEach((word) => {
  //     for (let i = 0; i < array2.length; i++) {
  //       if (array2[i].includes(word)) {
  //         matches.push(word);
  //         break;
  //       }
  //     }
  //   });

  //   return matches.sort();

  return array1
    .map((word) => {
      for (let i = 0; i < array2.length; i++) {
        if (array2[i].includes(word)) {
          matches.push(word);
          break;
        }
      }
    })
    .filter((word) => word)
    .sort();
}

console.log(
  ["xyz", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
