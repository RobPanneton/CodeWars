// random numbers including min max
// math.rand does not include max value normally

const getRandomNumberBetween = (min, max) => {
  // top and bottom incl
  // const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  // only bottom incl
  // const randomNumber = Math.floor(Math.random() * (max - min) + min);
  // only bottom incl
  // const randomNumber = Math.floor(Math.random() * max);
  // only top incl
  // const randomNumber = Math.floor(Math.random() * max + 1);
  return randomNumber === min || randomNumber === max
    ? `${randomNumber} min/max`
    : randomNumber;
};

for (let i = 0; i < 21; i++) console.log(getRandomNumberBetween(0, 6));
