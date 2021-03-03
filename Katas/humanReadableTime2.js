// 1 year = 31536000
// 1 day = 86400
// 1 hour = 3600
// 1 minute = 60

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let time = {};
  let secs = seconds;

  while (secs >= 31536000) {
    time.year ? time.year++ : (time.year = 1);
    secs -= 31536000;
  }

  while (secs >= 86400) {
    time.day ? time.day++ : (time.day = 1);
    secs -= 86400;
  }

  while (secs >= 3600) {
    time.hour ? time.hour++ : (time.hour = 1);
    secs -= 3600;
  }

  while (secs >= 60) {
    time.minute ? time.minute++ : (time.minute = 1);
    secs -= 60;
  }

  if (secs > 0) time.second = secs;

  if (Object.keys(time).length === 5) {
    return `${Object.values(time)[0]} ${Object.keys(time)[0]}${
      time[[Object.keys(time)[0]]] > 1 ? "s" : ""
    }, ${Object.values(time)[1]} ${Object.keys(time)[1]}${
      time[[Object.keys(time)[1]]] > 1 ? "s" : ""
    }, ${Object.values(time)[2]} ${Object.keys(time)[2]}${
      time[[Object.keys(time)[2]]] > 1 ? "s" : ""
    }, ${Object.values(time)[3]} ${Object.keys(time)[3]}${
      time[[Object.keys(time)[3]]] > 1 ? "s" : ""
    } and ${Object.values(time)[4]} ${Object.keys(time)[4]}${
      time[[Object.keys(time)[4]]] > 1 ? "s" : ""
    }`;
  }

  if (Object.keys(time).length === 4) {
    return `${Object.values(time)[0]} ${Object.keys(time)[0]}${
      time[[Object.keys(time)[0]]] > 1 ? "s" : ""
    }, ${Object.values(time)[1]} ${Object.keys(time)[1]}${
      time[[Object.keys(time)[1]]] > 1 ? "s" : ""
    }, ${Object.values(time)[2]} ${Object.keys(time)[2]}${
      time[[Object.keys(time)[2]]] > 1 ? "s" : ""
    } and ${Object.values(time)[3]} ${Object.keys(time)[3]}${
      time[[Object.keys(time)[3]]] > 1 ? "s" : ""
    }`;
  }

  if (Object.keys(time).length === 3) {
    return `${Object.values(time)[0]} ${Object.keys(time)[0]}${
      time[[Object.keys(time)[0]]] > 1 ? "s" : ""
    }, ${Object.values(time)[1]} ${Object.keys(time)[1]}${
      time[[Object.keys(time)[1]]] > 1 ? "s" : ""
    } and ${Object.values(time)[2]} ${Object.keys(time)[2]}${
      time[[Object.keys(time)[2]]] > 1 ? "s" : ""
    }`;
  }

  if (Object.keys(time).length === 2) {
    return `${Object.values(time)[0]} ${Object.keys(time)[0]}${
      time[[Object.keys(time)[0]]] > 1 ? "s" : ""
    } and ${Object.values(time)[1]} ${Object.keys(time)[1]}${
      time[[Object.keys(time)[1]]] > 1 ? "s" : ""
    }`;
  }

  return `${Object.values(time)[0]} ${Object.keys(time)[0]}${
    time[[Object.keys(time)[0]]] > 1 ? "s" : ""
  }`;
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));

// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.
// In general, a positive integer and one of the valid units of time, separated by a space.
// The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component,
//  which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one.
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero.
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible".
// It means that the function should not return 61 seconds,
// but 1 minute and 1 second instead.
// Formally, the duration specified by of a
// component must not be greater than any valid more significant unit of time.
