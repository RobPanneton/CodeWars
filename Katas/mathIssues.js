Math.round = function (number) {
  let fixedNum = 0;
  if (number % 1 >= 0.5) {
    const difference = 1 - (number % 1);
    fixedNum = number + difference;
  } else {
    const difference = number % 1;
    fixedNum = number - difference;
  }

  return fixedNum;
};

Math.ceil = function (number) {
  let fixedNum = 0;
  const difference = 1 - (number % 1);
  fixedNum = number + difference;

  if (number % 1 === 0) return number;

  return fixedNum;
};

Math.floor = function (number) {
  let fixedNum = 0;
  const difference = number % 1;
  fixedNum = number - difference;

  return fixedNum;
};

// Oh no, our Math object was "accidently" reset.
// Can you re-implement some of those functions? We can assure,
// that only non-negative numbers are passed as arguments.

// So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()
