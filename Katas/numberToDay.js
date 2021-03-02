function getDay(day, isLeap) {
  if (isLeap === true && day === 60) return `February, 29`;
  if (isLeap === true && day === 61) return `March, 1`;
  if (isLeap === true && day > 60) day -= 1;

  if (day > 334) {
    return `December, ${day - 334}`;
  } else if (day > 304) {
    return `November, ${day - 304}`;
  } else if (day > 273) {
    return `October, ${day - 273}`;
  } else if (day > 243) {
    return `September, ${day - 243}`;
  } else if (day > 212) {
    return `August, ${day - 212}`;
  } else if (day > 181) {
    return `July, ${day - 181}`;
  } else if (day > 151) {
    return `June, ${day - 151}`;
  } else if (day > 120) {
    return `May, ${day - 120}`;
  } else if (day > 90) {
    return `April, ${day - 90}`;
  } else if (day > 59) {
    if (isLeap === true && day === 60) {
      return `February, 29`;
    } else {
      return `March, ${day - 59}`;
    }
  } else if (day > 31) {
    return `February, ${day - 31}`;
  } else {
    return `January, ${day}`;
  }
}

console.log(getDay(15, false));
console.log(getDay(41, false));
console.log(getDay(59, false));
console.log(getDay(60, false));
console.log(getDay(60, true));
console.log(getDay(15, true));
console.log(getDay(365, false));
console.log(getDay(366, true));
console.log(getDay(61, true));

// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year,
// as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments,
// and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// getDay(41, false)   =>  "February, 10"  //  41st day of non-leap year is February, 10
// getDay(60, false)   =>  "March, 1"      //  60th day of non-leap year is March, 1
// getDay(60, true)    =>  "February, 29"  //  60th day of leap year is February, 29
// getDay(365, false)  =>  "December, 31"  //  365th day of non-leap year is December, 31
// getDay(366, true)   =>  "December, 31"  //  366th day of leap year is December, 31
