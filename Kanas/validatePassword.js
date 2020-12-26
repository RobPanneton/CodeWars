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
