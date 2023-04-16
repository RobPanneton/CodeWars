function validatePIN(pin) {
  const regex = /^\d+$/;
  return regex.test(pin) && (pin.length === 4 || pin.length === 6)
    ? true
    : false;
}
