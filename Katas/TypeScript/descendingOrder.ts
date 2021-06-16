export function descendingOrder(n: number) {
  return +n.toString().split("").sort().reverse().join("");
}
