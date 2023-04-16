const tribonacci = (
  [a, b, c]: [number, number, number],
  n: number
): number[] => {
  const argArr = [a, b, c];

  let arr: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i < 3) {
      arr.push(argArr[i]);
      continue;
    }

    let sum: number = 0;

    for (let j = 3; j > 0; j--) sum += arr[i - j];

    arr.push(sum);
  }

  return arr;
};

console.log(tribonacci([1, 1, 1], 10));

// const tribonacci = (
//   [a, b, c]: [number, number, number],
//   n: number
// ): number[] => {
//   const argArr = [a, b, c];

//   const arr = new Array<number>(n);
//   console.log(arr);

//   return arr.reduce((acc, cv, i) => {
//     if (i < 3) return [...acc, argArr[i]];

//     const next = acc
//       .slice(acc.length - 3, acc.length)
//       .reduce((acc2, cv2) => acc2 + cv2, 0);
//     return [...acc, next];
//   }, []);
// };

// interface user {
//   name: string;
//   age: number;
// }

// let user1 = {
//   name: "julie",
//   age: 27,
// };

// function printUser1(person: user) {
//   console.log(person.name);
// }

// console.log(printUser1(user1));
