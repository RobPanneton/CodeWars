function validPass(password) {
  const pwRegEx = /^\w{4,19}$/;
  const numRegEx = /\d/;
  const letterRegEx = /\D/;

  return pwRegEx.test(password) &&
    numRegEx.test(password) &&
    letterRegEx.test(password)
    ? "VALID"
    : "INVALID";
}

// I will give you a string. You respond with "VALID"
//if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.
