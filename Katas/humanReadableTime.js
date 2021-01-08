function humanReadable(seconds) {
  let time = "";
  let leftovers = seconds;

  if (seconds >= 3600) {
    if (Math.floor(leftovers / 3600) < 10) {
      time += `0${Math.floor(leftovers / 3600)}:`;
      leftovers = leftovers % 3600;
    } else {
      time += `${Math.floor(leftovers / 3600)}:`;
      leftovers = leftovers % 3600;
    }
  } else {
    time += "00:";
  }

  if (seconds >= 60) {
    if (Math.floor(leftovers / 60 < 10)) {
      time += `0${Math.floor(leftovers / 60)}:`;
      leftovers = leftovers % 60;
    } else {
      time += `${Math.floor(leftovers / 60)}:`;
      leftovers = leftovers % 60;
    }
  } else {
    time += "00:";
  }

  if (leftovers < 10) {
    time += `0${leftovers}`;
  } else {
    time += `${leftovers}`;
  }

  return time;
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));

// Write a function, which takes a non-negative integer (seconds)
// as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.
