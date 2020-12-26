function validateCode(code) {
  return /^[1-3]/.test(code.toString().split("")[0]);
}

console.log(validateCode(123));
console.log(validateCode(321));
console.log(validateCode(8));
console.log(validateCode(248));
console.log(validateCode(9453));
