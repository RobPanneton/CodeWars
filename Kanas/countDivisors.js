function getDivisorsCnt(n) {
  let divisors = 0;

  for (i = 1; i <= n; i++) {
    n % i === 0 && divisors++;
  }

  return divisors;
}

console.log(getDivisorsCnt(10));
