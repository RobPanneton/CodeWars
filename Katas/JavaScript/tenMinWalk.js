function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;

  walk.forEach((w) => {
    if (w === "n") {
      x++;
    } else if (w === "s") {
      x--;
    } else if (w === "e") {
      y++;
    } else if (w === "w") {
      y--;
    }
  });

  return x === 0 && y === 0 ? true : false;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n"]));
console.log(isValidWalk(["s", "s", "s"]));
console.log(isValidWalk(["e", "e", "e"]));
console.log(isValidWalk(["w", "w", "w"]));
