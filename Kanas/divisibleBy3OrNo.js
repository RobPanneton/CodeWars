function divisibleByThree(str) {
  return Number.isInteger(
    [...str].reduce((a, b) => Number(a) + Number(b), 0) / 3
  );
}

// no modulo for bit of extra challenge
