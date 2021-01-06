function addArrays(array1, array2) {
  return !array1.length && !array2.length
    ? []
    : Number(array1.join("")) + Number(array2.join("")) >= 0
    ? (Number(array1.join("")) + Number(array2.join("")))
        .toString()
        .split("")
        .map((d) => Number(d))
    : (Number(array1.join("")) + Number(array2.join("")))
        .toString()
        .split("")
        .map((d, index) => (index === 1 ? Number(d) * -1 : Number(d)))
        .splice((0, 1));
}

//////////////////////////
//The less cheesy version

//   if (!array1.length && !array2.length) return [];

//   console.log({ array1: array1, array2: array2 });

//   const sum = Number(array1.join("")) + Number(array2.join(""));

//   if (sum >= 0)
//  return sum
//    .toString()
//    .split("")
//    .map((d) => Number(d));

//   return sum
//     .toString()
//     .split("")
//     .map((d, index) => (index === 1 ? Number(d) * -1 : Number(d)))
//     .splice((0, 1));

console.log(addArrays([6, 7], [6, 7]));
console.log(addArrays([], []));
console.log(addArrays([-6, 7], [1, 0]));
