function validate(password) {
  return /^(?=^\w{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/g.test(password);
}

console.log(validate("fjd3  IR9"));
console.log(validate("fjd3IR9.;"));
console.log(validate("4fdg5Fj3"));
console.log(validate("ghdfj32"));
console.log(validate("DSJKHD23"));

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// ONE LINER ONLY
// 5 KYU
